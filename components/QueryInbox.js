'use client';

import { useState } from 'react';

const pageSize = 12;

export default function QueryInbox({ initialInbox }) {
  const [inbox, setInbox] = useState(initialInbox);
  const [filter, setFilter] = useState('all');
  const [busyId, setBusyId] = useState('');
  const [error, setError] = useState('');

  async function loadQueries(nextFilter = filter, page = 1) {
    setError('');
    const response = await fetch(`/api/queries?page=${page}&pageSize=${pageSize}&status=${nextFilter}`);
    if (!response.ok) {
      setError('The inbox could not be refreshed.');
      return;
    }
    setInbox(await response.json());
  }

  async function changeStatus(query) {
    setBusyId(query.id);
    const response = await fetch('/api/queries', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: query.id, status: query.status === 'read' ? 'unread' : 'read' }),
    });
    setBusyId('');
    if (response.ok) loadQueries();
    else setError('The query status could not be changed.');
  }

  async function removeQuery(query) {
    if (!window.confirm(`Delete the enquiry from ${query.name}?`)) return;
    setBusyId(query.id);
    const response = await fetch('/api/queries', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: query.id }),
    });
    setBusyId('');
    if (response.ok) loadQueries(filter, Math.max(1, inbox.queries.length === 1 ? inbox.page - 1 : inbox.page));
    else setError('The query could not be deleted.');
  }

  function selectFilter(nextFilter) {
    setFilter(nextFilter);
    loadQueries(nextFilter);
  }

  return <section className="query-list">
    <div className="query-list__heading">
      <div><p className="overline">Customer enquiries</p><h2>Inbox</h2></div>
      <span>{inbox.total} {filter === 'all' ? 'total' : filter}</span>
    </div>
    <nav className="query-filters" aria-label="Filter enquiries">
      {['all', 'unread', 'read'].map((option) => <button className={filter === option ? 'is-active' : ''} key={option} onClick={() => selectFilter(option)}>{option}<b>{option === 'all' ? inbox.unread + inbox.read : inbox[option]}</b></button>)}
    </nav>
    {error && <p className="admin-error">{error}</p>}
    {inbox.queries.length === 0 ? <div className="query-empty">No {filter === 'all' ? '' : filter + ' '}enquiries here.</div> : <div className="query-items">{inbox.queries.map((query) => <article className={`query-item ${query.status === 'unread' ? 'is-unread' : ''}`} key={query.id}>
      <div className="query-item__meta"><div><span className="query-status">{query.status}</span><strong>{query.name}</strong></div><time dateTime={query.createdAt}>{new Date(query.createdAt).toLocaleString('en-GB')}</time></div>
      <div className="query-item__contact"><a href={`mailto:${query.email}`}>{query.email}</a>{query.phone && <a href={`tel:${query.phone}`}>{query.phone}</a>}</div>
      <p className="query-item__interest">{query.interest}</p><p>{query.message}</p>
      <div className="query-item__actions"><button onClick={() => changeStatus(query)} disabled={busyId === query.id}>{query.status === 'read' ? 'Mark unread' : 'Mark read'}</button><button className="is-danger" onClick={() => removeQuery(query)} disabled={busyId === query.id}>Delete</button></div>
    </article>)}</div>}
    {inbox.totalPages > 1 && <div className="query-pagination"><button disabled={inbox.page <= 1} onClick={() => loadQueries(filter, inbox.page - 1)}>← Newer</button><span>Page {inbox.page} of {inbox.totalPages}</span><button disabled={inbox.page >= inbox.totalPages} onClick={() => loadQueries(filter, inbox.page + 1)}>Older →</button></div>}
  </section>;
}
