import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import Order from '@/models/Order';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

// GET - Fetch user's orders
export async function GET(request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    await dbConnect();
    
    // Get user's orders
    const orders = await Order.find({ 
      userId: session.user.id 
    }).sort({ timestamp: -1 });
    
    return NextResponse.json({ 
      success: true,
      orders,
      count: orders.length
    });
  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json(
      { error: 'Failed to fetch orders', details: error.message },
      { status: 500 }
    );
  }
}

// POST - Create new order
export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const orderData = await request.json();
    
    // Add userId from session
    orderData.userId = session.user.id;
    
    await dbConnect();
    
    // Create new order
    const order = new Order(orderData);
    await order.save();
    
    // Send WhatsApp notification (will be implemented in the next step)
    
    return NextResponse.json({ 
      success: true, 
      order,
      message: 'Order created successfully' 
    });
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json(
      { error: 'Failed to create order', details: error.message },
      { status: 500 }
    );
  }
}