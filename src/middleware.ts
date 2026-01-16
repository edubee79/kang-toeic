import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Pages that don't require authentication
const publicPaths = ['/login'];

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Allow public paths
    if (publicPaths.some(path => pathname.startsWith(path))) {
        return NextResponse.next();
    }

    // Check for authentication token in cookies or headers
    // Since we're using localStorage, we can't check it in middleware
    // Instead, we'll let the client-side handle redirects
    // But we can still protect admin routes
    if (pathname.startsWith('/admin')) {
        // Admin routes - let the page handle authentication
        return NextResponse.next();
    }

    // For homework routes, let client-side handle it
    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!_next/static|_next/image|favicon.ico).*)',
    ],
};
