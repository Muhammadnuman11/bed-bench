import { Suspense } from 'react';
import Header from '@/components/Header';
import Footer, { SocialIcon } from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { BedBenchMark } from '@/components/Mark';

const socialLinks = [
  ['Instagram', 'https://www.instagram.com/bedbench01/'],
  ['Facebook', 'https://www.facebook.com/share/1U795hwxYU/?mibextid=wwXIfr'],
  ['TikTok', 'https://www.tiktok.com/@bedbench.pk?_r=1&_t=ZS-99L6Ag3j97s'],
  ['YouTube', 'https://youtube.com/@bedbench?si=fXSSkI4Ifyik3EyE'],
  ['Pinterest', 'https://www.pinterest.com/bedbench/'],
];

export default function Contact() {
  return <>
  <Header />
  <main>
  <section className="contact-hero">
  <p className="overline">The showroom</p>
  <h1>Let&rsquo;s make<br />space for <i>living.</i></h1>
  <p>Visit us, call us, or send a note. We&rsquo;d be delighted to help you find the right piece.</p>
  </section>
  <section className="contact-section section-pad">
  <div className="contact-details">
  <p className="overline">Come and see us</p>
  <h2>The details.</h2>
  <div className="detail-list">
  <div>
  <span>Call / WhatsApp</span>
  <a href="tel:+923212111134">0321 2111134</a></div><div><span>Write</span><a href="mailto:info@bedbench.com.pk">info@bedbench.com.pk</a></div><div><span>Visit</span><p>Plaza No. 154, Block CCA2 Commercial Market<br />DHA Phase 6, Lahore</p></div><div><span>Hours</span><p>Mon — Sat: 10am — 9pm<br />Sunday: Holiday</p></div></div><BedBenchMark small /></div><div><p className="overline">A little hello</p><h2>Send an enquiry.</h2><Suspense fallback={<div className="form-loading">Loading enquiry form…</div>}><ContactForm /></Suspense></div></section><section className="map-section"><div className="map-pattern"><span>Bed Bench Showroom</span><small>DHA Phase 6 · Lahore</small></div></section><section className="follow-band"><p className="overline">Follow along</p><h2>Behind the <i>workshop doors.</i></h2><div className="follow-socials">{socialLinks.map(([label, href]) => <a href={href} key={label} aria-label={`Visit Bed Bench on ${label}`} target="_blank" rel="noreferrer"><SocialIcon label={label} /><span>{label}</span></a>)}</div></section></main><Footer /></>;
}
