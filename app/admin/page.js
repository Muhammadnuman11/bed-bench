import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { sessionCookie, validSession } from '@/lib/admin';
import AdminLoginForm from '@/components/AdminLoginForm';

export default function AdminLogin() {
    if (validSession(cookies().get(sessionCookie)?.value)) redirect('/dashboard');

    return <main className="admin-auth">
        <div className="admin-auth__panel">
            <p className="overline">Bed Bench administration</p>
            <h1>Sign in to<br /><i>your dashboard.</i></h1>
            <AdminLoginForm />
        </div>
    </main>;
}
