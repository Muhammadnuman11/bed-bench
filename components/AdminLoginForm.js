'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginForm() {
    const router = useRouter();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function submit(event) {
        event.preventDefault();
        setLoading(true);
        setError('');
        const form = new FormData(event.currentTarget);
        const response = await fetch('/api/auth/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(Object.fromEntries(form)) });
        if (response.ok) router.push('/dashboard');
        else setError('Invalid admin credentials.');
        setLoading(false);
    }

    return <form onSubmit={submit} className="admin-form">
        <label>Username<input name="username" required autoComplete="username" /></label>
        <label>Password<input name="password" type="password" required autoComplete="current-password" /></label>
        {error && <p className="admin-error">{error}</p>}
        <button className="gold-button" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign in'} <span>→</span>
        </button>
    </form>;
}
