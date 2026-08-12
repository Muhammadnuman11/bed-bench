import Link from 'next/link';
import { BedBenchMark } from './Mark';

const Arrow = () => <span className="arrow">↗</span>;

export default function Footer() {
  return <footer><div className="footer-grid"><div><BedBenchMark /><p className="footer-copy">Considered furniture for rooms that invite you to stay a little longer.</p></div><div><p className="overline">Navigate</p><div className="footer-links"><Link href="/">Home</Link><Link href="/about">Our Story</Link><Link href="/categories">Collections</Link><Link href="/contact">Visit Showroom</Link></div></div><div><p className="overline">The showroom</p><a href="tel:+923212111134">0321 2111134 <Arrow /></a><a href="mailto:info@bedbench.com">info@bedbench.com <Arrow /></a><p className="address">Plaza No. 154, Block CCA2 Commercial Market<br />DHA Phase 6, Lahore</p><div className="socials"><a href="#">ig</a><a href="#">fb</a><a href="#">pi</a></div></div></div><div className="footer-base"><span>© 2026 Bed Bench. All rights reserved.</span><span>Crafted for comfort, made to last.</span></div></footer>;
}
