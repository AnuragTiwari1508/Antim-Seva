import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb-native';
import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongodb';

// GET - Get user's cart
export async function GET(request) {
  try {
    const { db } = await connectToDatabase();
    
    const authHeader = request.headers.get('authorization');
    if (!authHeader) {
      return NextResponse.json({ error: 'No authorization header' }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    const cartsCollection = db.collection('carts');
    const cart = await cartsCollection.findOne({ 
      userId: new ObjectId(decoded.userId), 
      isActive: true 
    });
    
    return NextResponse.json({ cart });
  } catch (error) {
    console.error('Get cart error:', error);
    return NextResponse.json({ error: 'Failed to get cart' }, { status: 500 });
  }
}

// POST - Add item to cart
export async function POST(request) {
  try {
    const { db } = await connectToDatabase();
    
    const authHeader = request.headers.get('authorization');
    if (!authHeader) {
      return NextResponse.json({ error: 'No authorization header' }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    const { productId, productName, quantity = 1, price } = await request.json();
    
    if (!productId || !productName || !price) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Get user details
    const usersCollection = db.collection('users');
    const user = await usersCollection.findOne({ _id: new ObjectId(decoded.userId) });
    
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Find existing cart or create new one
    const cartsCollection = db.collection('carts');
    let cart = await cartsCollection.findOne({ 
      userId: new ObjectId(decoded.userId), 
      isActive: true 
    });
    
    if (!cart) {
      cart = {
        userId: new ObjectId(decoded.userId),
        userName: user.name,
        items: [],
        totalAmount: 0,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      };
    }

    // Check if item already exists in cart
    const existingItemIndex = cart.items.findIndex(item => item.productId === productId);
    
    if (existingItemIndex > -1) {
      // Update quantity if item exists
      cart.items[existingItemIndex].quantity += quantity;
    } else {
      // Add new item
      cart.items.push({
        productId,
        productName,
        quantity,
        price,
        addedAt: new Date()
      });
    }

    // Calculate total amount
    cart.totalAmount = cart.items.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);

    cart.updatedAt = new Date();

    // Upsert cart
    await cartsCollection.replaceOne(
      { userId: new ObjectId(decoded.userId), isActive: true },
      cart,
      { upsert: true }
    );
    
    return NextResponse.json({ 
      message: 'Item added to cart successfully',
      cart 
    });
  } catch (error) {
    console.error('Add to cart error:', error);
    return NextResponse.json({ error: 'Failed to add item to cart' }, { status: 500 });
  }
}

// PUT - Update cart item quantity
export async function PUT(request) {
  try {
    await dbConnect();
    
    const authHeader = request.headers.get('authorization');
    if (!authHeader) {
      return NextResponse.json({ error: 'No authorization header' }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    const { productId, quantity } = await request.json();
    
    if (!productId || quantity === undefined) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const cart = await Cart.findOne({ userId: decoded.userId, isActive: true });
    
    if (!cart) {
      return NextResponse.json({ error: 'Cart not found' }, { status: 404 });
    }

    const itemIndex = cart.items.findIndex(item => item.productId === productId);
    
    if (itemIndex === -1) {
      return NextResponse.json({ error: 'Item not found in cart' }, { status: 404 });
    }

    if (quantity <= 0) {
      // Remove item if quantity is 0 or less
      cart.items.splice(itemIndex, 1);
    } else {
      // Update quantity
      cart.items[itemIndex].quantity = quantity;
    }

    await cart.save();
    
    return NextResponse.json({ 
      message: 'Cart updated successfully',
      cart 
    });
  } catch (error) {
    console.error('Update cart error:', error);
    return NextResponse.json({ error: 'Failed to update cart' }, { status: 500 });
  }
}

// DELETE - Clear cart or remove specific item
export async function DELETE(request) {
  try {
    await dbConnect();
    
    const authHeader = request.headers.get('authorization');
    if (!authHeader) {
      return NextResponse.json({ error: 'No authorization header' }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    const { searchParams } = new URL(request.url);
    const productId = searchParams.get('productId');
    
    const cart = await Cart.findOne({ userId: decoded.userId, isActive: true });
    
    if (!cart) {
      return NextResponse.json({ error: 'Cart not found' }, { status: 404 });
    }

    if (productId) {
      // Remove specific item
      cart.items = cart.items.filter(item => item.productId !== productId);
    } else {
      // Clear entire cart
      cart.items = [];
    }

    await cart.save();
    
    return NextResponse.json({ 
      message: productId ? 'Item removed from cart' : 'Cart cleared successfully',
      cart 
    });
  } catch (error) {
    console.error('Delete cart error:', error);
    return NextResponse.json({ error: 'Failed to delete from cart' }, { status: 500 });
  }
}
