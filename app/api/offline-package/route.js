import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongoose';
import OfflinePackage from '@/models/OfflinePackage';

// Token generation logic for offline packages
async function generatePackageToken(shopId, customerEmail) {
  try {
    // Extract shop number from shopId (SH01, SH02, etc.)
    const shopNumber = shopId.replace('SH', '');
    
    // Check if customer has existing bookings for this shop
    const existingBookings = await OfflinePackage.find({
      shopId: shopId,
      'customerDetails.email': customerEmail
    }).sort({ createdAt: -1 });

    let tokenNumber;
    
    if (existingBookings.length > 0) {
      // Repeat customer - add .01, .02 etc.
      const repeatCount = existingBookings.length;
      const baseToken = existingBookings[0].tokenNumber.split('.')[0];
      tokenNumber = `${baseToken}.${String(repeatCount).padStart(2, '0')}`;
    } else {
      // New customer - get next sequential number for this shop
      const latestBooking = await OfflinePackage.findOne({
        shopId: shopId,
        tokenNumber: { $regex: `^SH${shopNumber}\\d{2}$` } // Only base tokens, not repeat ones
      }).sort({ tokenNumber: -1 });

      let nextNumber = 1;
      if (latestBooking) {
        const lastNumber = parseInt(latestBooking.tokenNumber.slice(-2));
        nextNumber = lastNumber + 1;
      }

      tokenNumber = `SH${shopNumber}${String(nextNumber).padStart(2, '0')}`;
    }

    return tokenNumber;
  } catch (error) {
    console.error('Error generating package token:', error);
    throw new Error('Failed to generate token');
  }
}

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();
    const { shopId, shopName, customerDetails, packageDetails } = body;

    // Validate required fields
    if (!shopId || !shopName || !packageDetails || !customerDetails?.name || !customerDetails?.email || !customerDetails?.phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Generate unique token
    const tokenNumber = await generatePackageToken(shopId, customerDetails.email);

    // Create offline package booking record
    const offlinePackage = new OfflinePackage({
      tokenNumber,
      shopId,
      shopName,
      packageId: packageDetails.id,
      packageName: packageDetails.name,
      packagePrice: packageDetails.basePrice,
      packageItems: packageDetails.items || [],
      customerDetails: {
        name: customerDetails.name,
        email: customerDetails.email,
        phone: customerDetails.phone,
        address: customerDetails.address || ''
      },
      preferredCollectionDate: customerDetails.preferredDate ? new Date(customerDetails.preferredDate) : null,
      notes: customerDetails.notes || '',
      repeatBooking: tokenNumber.includes('.'),
      originalTokenNumber: tokenNumber.includes('.') ? tokenNumber.split('.')[0] : null,
      specialRequests: customerDetails.notes || ''
    });

    await offlinePackage.save();

    // Return success response with token
    return NextResponse.json({
      success: true,
      tokenNumber,
      booking: {
        id: offlinePackage._id,
        tokenNumber: offlinePackage.tokenNumber,
        shopName: offlinePackage.shopName,
        packageName: offlinePackage.packageName,
        status: offlinePackage.status,
        bookingDate: offlinePackage.bookingDate,
        totalPrice: offlinePackage.packagePrice
      }
    });

  } catch (error) {
    console.error('Offline package booking error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET endpoint to fetch package booking by token
export async function GET(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const tokenNumber = searchParams.get('token');
    const shopId = searchParams.get('shopId');
    const status = searchParams.get('status');

    if (tokenNumber) {
      // Get specific booking by token
      const booking = await OfflinePackage.findOne({ tokenNumber });
      if (!booking) {
        return NextResponse.json(
          { error: 'Package booking not found' },
          { status: 404 }
        );
      }
      return NextResponse.json({ booking });
    }

    if (shopId) {
      // Get all bookings for a shop with optional status filter
      const query = { shopId };
      if (status) {
        query.status = status;
      }
      
      const bookings = await OfflinePackage.find(query).sort({ createdAt: -1 });
      return NextResponse.json({ bookings });
    }

    // Get all offline package bookings (admin view)
    const allBookings = await OfflinePackage.find({}).sort({ createdAt: -1 }).limit(100);
    return NextResponse.json({ bookings: allBookings });

  } catch (error) {
    console.error('Get offline package booking error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PUT endpoint to update booking status
export async function PUT(request) {
  try {
    await connectDB();

    const body = await request.json();
    const { tokenNumber, status, actualCollectionDate, notes } = body;

    if (!tokenNumber || !status) {
      return NextResponse.json(
        { error: 'Token number and status are required' },
        { status: 400 }
      );
    }

    const updateData = { status };
    
    if (actualCollectionDate) {
      updateData.actualCollectionDate = new Date(actualCollectionDate);
    }
    
    if (notes) {
      updateData.notes = notes;
    }

    const booking = await OfflinePackage.findOneAndUpdate(
      { tokenNumber },
      updateData,
      { new: true }
    );

    if (!booking) {
      return NextResponse.json(
        { error: 'Package booking not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      booking
    });

  } catch (error) {
    console.error('Update offline package booking error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}