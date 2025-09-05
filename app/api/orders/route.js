import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import Order from '@/models/Order';
import jwt from 'jsonwebtoken';
import { getServerSession } from 'next-auth/next';

// JWT secret key - should be in environment variables in production
const JWT_SECRET = process.env.JWT_SECRET || 'antim-seva-secret-key';

// GET - Fetch user's orders
export async function GET(request) {
  try {
    // Try to get token from cookies
    const cookies = request.cookies;
    const token = cookies.get('token')?.value;
    
    if (token) {
      try {
        // Verify token
        const decoded = jwt.verify(token, JWT_SECRET);
        const userId = decoded.userId || decoded.id;
        
        await dbConnect();
        
        // Get user's orders
        const orders = await Order.find({ 
          userId: userId 
        }).sort({ timestamp: -1 });
        
        return NextResponse.json({ 
          success: true,
          orders,
          count: orders.length
        });
      } catch (tokenError) {
        console.error('Token verification error:', tokenError);
        // Continue to try NextAuth session if token verification fails
      }
    }
    
    // Fallback to NextAuth session if available
    try {
      // Import dynamically to prevent build errors
      const { authOptions } = await import('@/app/api/auth/[...nextauth]/options');
      const session = await getServerSession(authOptions);
      
      if (session) {
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
      }
    } catch (sessionError) {
      console.error('Session error:', sessionError);
      // Continue to unauthorized response if session check fails
    }
    
    // If no authentication method worked
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
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
    // Try to get token from cookies
    const cookies = request.cookies;
    const token = cookies.get('token')?.value;
    
    if (token) {
      try {
        // Verify token
        const decoded = jwt.verify(token, JWT_SECRET);
        const userId = decoded.userId || decoded.id;
        
        const orderData = await request.json();
        
        // Add userId from token
        orderData.userId = userId;
        
        await dbConnect();
        
        // Create new order
        const order = new Order(orderData);
        await order.save();
        
        return NextResponse.json({ 
          success: true, 
          order,
          message: 'Order created successfully' 
        });
      } catch (tokenError) {
        console.error('Token verification error:', tokenError);
        // Continue to try NextAuth session if token verification fails
      }
    }
    
    // Fallback to NextAuth session if available
    try {
      // Import dynamically to prevent build errors
      const { authOptions } = await import('@/app/api/auth/[...nextauth]/options');
      const session = await getServerSession(authOptions);
      
      if (session) {
        const orderData = await request.json();
        
        // Add userId from session
        orderData.userId = session.user.id;
        
        await dbConnect();
        
        // Create new order
        const order = new Order(orderData);
        await order.save();
        
        return NextResponse.json({ 
          success: true, 
          order,
          message: 'Order created successfully' 
        });
      }
    } catch (sessionError) {
      console.error('Session error:', sessionError);
      // Continue to unauthorized response if session check fails
    }
    
    // If no authentication method worked
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json(
      { error: 'Failed to create order', details: error.message },
      { status: 500 }
    );
  }
}