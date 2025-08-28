import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Order from '@/models/Order';
import { getServerSession } from 'next-auth/next';
import clientPromise from '@/lib/mongodb';

export async function GET(request) {
  try {
    // Connect to MongoDB
    await clientPromise;
    
    // Get orders for the logged-in user
    const orders = await Order.find({ 
      $or: [
        { userId: "guest" },
        { customerEmail: "guest" }
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