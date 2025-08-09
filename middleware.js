import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

// Paths that require authentication
const protectedPaths = [
  '/profile',
  '/checkout',
  '/orders',
  '/change-password',
];

// Paths that are only accessible to non-authenticated users
const authPaths = [
  '/login',
  '/register',
  '/forgot-password',
  '/reset-password',
];

export async function middleware(request) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get('token')?.value;

  // Validate JWT if present using Edge-friendly jose
  let isAuthenticated = false;
  if (token) {
    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'antim-sewa-secret-key');
      await jwtVerify(token, secret);
      isAuthenticated = true;
    } catch (_err) {
      // Invalid or expired token – treat as unauthenticated
      isAuthenticated = false;
    }
  }

  // Prepare a response we can mutate (e.g., clear bad cookie)
  let response;

  // If token exists but is invalid/expired, clear it proactively
  if (token && !isAuthenticated) {
    response = NextResponse.next();
    response.cookies.set({ name: 'token', value: '', path: '/', maxAge: 0 });
  }

  // Redirect authenticated users away from auth pages
  if (isAuthenticated && authPaths.some((authPath) => path.startsWith(authPath))) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Redirect unauthenticated users away from protected pages
  if (!isAuthenticated && protectedPaths.some((protectedPath) => path.startsWith(protectedPath))) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return response ?? NextResponse.next();
}

// No matcher config - let Next.js handle all routes
export const config = {
  matcher: [
    /*
     * Match specific paths that need auth protection or redirection:
     */
    '/profile',
    '/checkout',
    '/orders',
    '/change-password',
    '/login',
    '/register',
    '/forgot-password',
    '/reset-password',
  ],
};