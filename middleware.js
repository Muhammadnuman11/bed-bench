import { NextResponse } from 'next/server';

const sessionCookie = 'bedbench_admin_session';

export function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/api/queries') && request.method === 'POST') return NextResponse.next();
  if (request.cookies.get(sessionCookie)?.value) return NextResponse.next();
  if (request.nextUrl.pathname.startsWith('/api/')) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  return NextResponse.redirect(new URL('/admin', request.url));
}

export const config = { matcher: ['/dashboard/:path*', '/api/queries/:path*'] };
