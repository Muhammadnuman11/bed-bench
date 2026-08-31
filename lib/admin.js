import crypto from 'crypto';

const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const SESSION_SECRET = process.env.ADMIN_SESSION_SECRET;

export function validCredentials(username, password) {
  return Boolean(ADMIN_USERNAME && ADMIN_PASSWORD && username === ADMIN_USERNAME && password === ADMIN_PASSWORD);
}

export function createSession() {
  if (!SESSION_SECRET || !ADMIN_USERNAME) throw new Error('Missing admin environment configuration');
  const payload = Buffer.from(JSON.stringify({ username: ADMIN_USERNAME, expires: Date.now() + 8 * 60 * 60 * 1000 })).toString('base64url');
  const signature = crypto.createHmac('sha256', SESSION_SECRET).update(payload).digest('base64url');
  return `${payload}.${signature}`;
}

export function validSession(token) {
  if (!token) return false;
  const [payload, signature] = token.split('.');
  if (!payload || !signature) return false;
  const expected = crypto.createHmac('sha256', SESSION_SECRET).update(payload).digest('base64url');
  if (signature.length !== expected.length) return false;
  if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) return false;
  try {
    const session = JSON.parse(Buffer.from(payload, 'base64url').toString());
    return session.username === ADMIN_USERNAME && session.expires > Date.now();
  } catch {
    return false;
  }
}

export const sessionCookie = 'bedbench_admin_session';
