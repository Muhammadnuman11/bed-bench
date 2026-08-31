'use client';

import { useRouter } from 'next/navigation';

export default function DashboardActions() {
  const router = useRouter();
  async function logout() {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin');
    router.refresh();
  }
  return <button className="dashboard-logout" onClick={logout}>Sign out</button>;
}
