import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongoose';
import OfflineBooking from '@/models/OfflineBooking';

// Token generation logic
async function generateToken(shopId, customerEmail) {
  try {
    // Extract shop number from shopId (SH01, SH02, etc.)
    const shopNumber = shopId.replace('SH', '');
    
    // Check if customer has existing bookings for this shop
    const existingBookings = await OfflineBooking.find({
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
      const latestBooking = await OfflineBooking.findOne({
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
    console.error('Error generating token:', error);
    throw new Error('Failed to generate token');
  }
}

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();
    const { shopId, shopName, customerDetails, packageDetails } = body;

    // Validate required fields
    if (!shopId || !shopName || !customerDetails?.name || !customerDetails?.email || !customerDetails?.phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Generate unique token
    const tokenNumber = await generateToken(shopId, customerDetails.email);

    // Create booking record
    const booking = new OfflineBooking({
      tokenNumber,
      shopId,
      shopName,
      customerDetails: {
        name: customerDetails.name,
        email: customerDetails.email,
        phone: customerDetails.phone,
        address: customerDetails.address || ''
      },
      packageDetails: packageDetails || null,
      preferredCollectionDate: customerDetails.preferredDate ? new Date(customerDetails.preferredDate) : null,
      notes: customerDetails.notes || '',
      repeatBooking: tokenNumber.includes('.'),
      originalTokenNumber: tokenNumber.includes('.') ? tokenNumber.split('.')[0] : null
    });

    await booking.save();

    // Return success response with token
    return NextResponse.json({
      success: true,
      tokenNumber,
      booking: {
        id: booking._id,
        tokenNumber: booking.tokenNumber,
        shopName: booking.shopName,
        status: booking.status,
        bookingDate: booking.bookingDate
      }
    });

  } catch (error) {
    console.error('Offline booking error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET endpoint to fetch booking by token
export async function GET(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const tokenNumber = searchParams.get('token');
    const shopId = searchParams.get('shopId');

    if (tokenNumber) {
      // Get specific booking by token
      const booking = await OfflineBooking.findOne({ tokenNumber });
      if (!booking) {
        return NextResponse.json(
          { error: 'Booking not found' },
          { status: 404 }
        );
      }
      return NextResponse.json({ booking });
    }

    if (shopId) {
      // Get all bookings for a shop
      const bookings = await OfflineBooking.find({ shopId }).sort({ createdAt: -1 });
      return NextResponse.json({ bookings });
    }

    return NextResponse.json(
      { error: 'Token number or shop ID required' },
      { status: 400 }
    );

  } catch (error) {
    console.error('Get booking error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}