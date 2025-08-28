import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Order from '@/models/Order';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function GET(request) {
  try {
    // Get user session
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    await connectToDatabase();
    
    // Get orders for the logged-in user
    const orders = await Order.find({ 
      $or: [
        { userId: session.user.id },
        { customerEmail: session.user.email }
      ]
    }).sort({ timestamp: -1 });
    
    return NextResponse.json({ orders });
  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json({ error: 'Failed to fetch orders' }, { status: 500 });
  }
}

// Fallback for local storage orders when user is not logged in
export async function POST(request) {
  try {
    const { orderIds } = await request.json();
    
    if (!orderIds || !Array.isArray(orderIds)) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }
    
    await connectToDatabase();
    
    // Get orders by their orderIds
    const orders = await Order.find({ 
      orderId: { $in: orderIds } 
    }).sort({ timestamp: -1 });
    
    return NextResponse.json({ orders });
  } catch (error) {
    console.error('Error fetching local orders:', error);
    return NextResponse.json({ error: 'Failed to fetch orders' }, { status: 500 });
  }
}