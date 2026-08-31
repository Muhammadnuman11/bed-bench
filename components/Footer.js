import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaPinterestP } from 'react-icons/fa';
import { FaTiktok, FaYoutube } from 'react-icons/fa6';
import { BedBenchMark } from './Mark';

const Arrow = () => <span className="arrow">↗</span>;
const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/bedbench01/' },
  { label: 'Facebook', href: 'https://www.facebook.com/share/1U795hwxYU/?mibextid=wwXIfr' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@bedbench.pk?_r=1&_t=ZS-99L6Ag3j97s' },
  { label: 'YouTube', href: 'https://youtube.com/@bedbench?si=fXSSkI4Ifyik3EyE' },
  { label: 'Pinterest', href: 'https://www.pinterest.com/bedbench/' },
];

export function SocialIcon({ label }) {
  if (label === 'Instagram') return <FaInstagram aria-hidden="true" />;
  if (label === 'Facebook') return <FaFacebookF aria-hidden="true" />;
  if (label === 'TikTok') return <FaTiktok aria-hidden="true" />;
  if (label === 'YouTube') return <FaYoutube aria-hidden="true" />;
  return <FaPinterestP aria-hidden="true" />;
}

export default function Footer() {
  return <footer>
    <div className="footer-grid">
      <div>
        <BedBenchMark />
        <p className="footer-copy">Considered furniture for rooms that invite you to stay a little longer.</p>
      </div>
      <div>
        <p className="overline">Navigate</p>
        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/about">Our Story</Link>
          <Link href="/categories">Collections</Link>
          <Link href="/contact">Visit Showroom</Link>
        </div>
      </div>
      <div>
        <p className="overline">The showroom</p>
        <a href="tel:+923212111134">0321 2111134 <Arrow />
        </a>
        <a href="mailto:info@bedbench.com.pk">info@bedbench.com.pk <Arrow />
        </a>
        <p className="address">Plaza No. 154, Block CCA2 Commercial Market<br />DHA Phase 6, Lahore</p>
        <div className="socials">{socialLinks.map(({ label, href }) =>
          <a href={href} key={label} aria-label={`Visit Bed Bench on ${label}`} target="_blank" rel="noreferrer">
            <SocialIcon label={label} />
            <span className="social-tooltip">{label}</span>
          </a>)}
        </div>
      </div>
    </div>
    <div className="footer-base"><span>© 2026 Bed Bench. All rights reserved.</span>
      <span>Crafted for comfort, made to last.</span>
    </div>
  </footer>;
}
