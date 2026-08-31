import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { sessionCookie, validSession } from '@/lib/admin';
import { appendQuery, deleteQuery, readQueries, updateQueryStatus } from '@/lib/query-store';

export async function GET(request) {
  if (!validSession(cookies().get(sessionCookie)?.value)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { searchParams } = new URL(request.url);
  return NextResponse.json(await readQueries({ page: searchParams.get('page'), pageSize: searchParams.get('pageSize'), status: searchParams.get('status') || 'all' }));
}

export async function POST(request) {
  const body = await request.json();
  const required = ['name', 'email', 'interest', 'message'];
  if (required.some((field) => !String(body[field] || '').trim())) return NextResponse.json({ error: 'Please complete the required fields' }, { status: 400 });
  const query = await appendQuery({
    name: String(body.name).trim(),
    phone: String(body.phone || '').trim(),
    email: String(body.email).trim(),
    interest: String(body.interest).trim(),
    message: String(body.message).trim(),
  });
  return NextResponse.json({ ok: true, query }, { status: 201 });
}

export async function PATCH(request) {
  if (!validSession(cookies().get(sessionCookie)?.value)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { id, status } = await request.json();
  if (!['read', 'unread'].includes(status) || !await updateQueryStatus(id, status)) return NextResponse.json({ error: 'Query not found' }, { status: 404 });
  return NextResponse.json({ ok: true });
}

export async function DELETE(request) {
  if (!validSession(cookies().get(sessionCookie)?.value)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { id } = await request.json();
  if (!await deleteQuery(id)) return NextResponse.json({ error: 'Query not found' }, { status: 404 });
  return NextResponse.json({ ok: true });
}
