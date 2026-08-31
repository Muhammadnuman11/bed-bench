'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BedBenchMark } from './Mark';

const links = [['Home', '/'], ['About', '/about'], ['Collections', '/categories'], ['Contact', '/contact'], ['Admin', '/admin']];
export default function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  useEffect(() => { const f = () => setSolid(window.scrollY > 40); f(); window.addEventListener('scroll', f); return () => window.removeEventListener('scroll', f); },
    []);
  return <header className={`site-header ${solid ? 'is-solid' : ''}`}>
    <div className="nav-shell">
      <Link href="/" onClick={() => setOpen(false)}>
        <BedBenchMark small />
      </Link>
      <nav>{links.map(([label, href]) =>
        <Link href={href} key={href}>{label}</Link>)}</nav>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
        <span /><span />
      </button>
    </div>
    <div className={`mobile-menu ${open ? 'is-open' : ''}`}>{links.map(([label, href], i) => <Link href={href} key={href} style={{ transitionDelay: `${i * 70}ms` }} onClick={() => setOpen(false)}>{label}</Link>)}<p>DHA Phase 6, Lahore<br />0321 2111134</p></div>
  </header>;
}
