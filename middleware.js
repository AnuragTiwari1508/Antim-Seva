import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

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

export function middleware(request) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get('token')?.value;
  const isAuthenticated = !!token;

  // Redirect authenticated users away from auth pages
  if (isAuthenticated && authPaths.some(authPath => path.startsWith(authPath))) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Redirect unauthenticated users away from protected pages
  if (!isAuthenticated && protectedPaths.some(protectedPath => path.startsWith(protectedPath))) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\.svg$|.*\.png$|.*\.jpg$|.*\.jpeg$).*)',
  ],
};