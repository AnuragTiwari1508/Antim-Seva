import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Clear the token cookie
    return NextResponse.json(
      { message: 'Logged out successfully' },
      { 
        status: 200,
        headers: {
          'Set-Cookie': `token=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0` // Expire the cookie
        }
      }
    );
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { error: 'Failed to logout' },
      { status: 500 }
    );
  }
}