import { NextResponse } from 'next/server';

export function middleware(request) {
  return NextResponse.redirect(new URL('/coming-soon', request.url));
}

export const config = { matcher: ['/about', '/categories', '/contact'] };
