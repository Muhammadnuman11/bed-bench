import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { sessionCookie, validSession } from '@/lib/admin';
import { readQueries } from '@/lib/query-store';
import DashboardActions from '@/components/DashboardActions';
import QueryInbox from '@/components/QueryInbox';

export default async function Dashboard() {
  if (!validSession(cookies().get(sessionCookie)?.value)) redirect('/admin');
  const inbox = await readQueries();
  return <main className="dashboard"><header className="dashboard-header"><div><p className="overline">Bed Bench administration</p><h1>Enquiries <i>inbox.</i></h1></div><DashboardActions /></header><section className="dashboard-stats"><div><span>Total enquiries</span><strong>{inbox.unread + inbox.read}</strong></div><div><span>Unread</span><strong>{inbox.unread}</strong></div><div><span>Read</span><strong>{inbox.read}</strong></div><div><span>Latest enquiry</span><strong>{inbox.queries[0] ? new Date(inbox.queries[0].createdAt).toLocaleDateString('en-GB') : 'None yet'}</strong></div></section><QueryInbox initialInbox={inbox} /></main>;
}
