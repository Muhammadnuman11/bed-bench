import { NextResponse } from 'next/server';
import { createSession, sessionCookie, validCredentials } from '@/lib/admin';

export async function POST(request) {
  const { username, password } = await request.json();
  if (!validCredentials(username, password)) {
    return NextResponse.json({ error: 'Invalid admin credentials' }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(sessionCookie, createSession(), {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 8,
    path: '/',
  });
  return response;
}
