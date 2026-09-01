import Link from 'next/link'; import Image from 'next/image';
import Header from '@/components/Header'; import Footer from '@/components/Footer'; import Reveal from '@/components/Reveal'; import ProductCard from '@/components/ProductCard'; import { categories, products } from '@/lib/catalog'; import { BedBenchMark, LineIcon } from '@/components/Mark';

export default function Home() {
  return <><Header /><main>
    <section className="home-hero">
      <Image priority fill sizes="100vw" src="/banner-img.JPG" alt="A calm, refined bedroom" />
      <div className="hero-shade" />
      <div className="hero-watermark">
        <BedBenchMark />
      </div><div className="hero-content">
        <p className="overline">Premium furniture</p>

        <div className="gold-rule" /><h1>Furniture crafted<br /><i>for comfort.</i></h1><p className="hero-copy">Quietly luxurious pieces shaped by enduring materials and thoughtful detail.</p><div className="button-row"><Link className="gold-button" href="/categories">Explore collections <span>→</span></Link><Link className="quiet-button" href="/contact">Visit our showroom</Link></div></div><a className="scroll-note" href="#story">Scroll to discover <span>↓</span></a></section>
    <section id="story" className="intro-strip"><Reveal><p className="overline">A more considered home</p><h2>Where <i>comfort</i> meets craftsmanship.</h2></Reveal><Reveal delay={.12}><p>Bed Bench brings together the warmth of traditional making and a restrained, contemporary point of view. Furniture with presence, made to become part of your everyday rituals.</p><Link className="text-link dark-link" href="/about">Learn our story <b>→</b></Link></Reveal></section>
    <section className="categories-section section-pad"><div className="section-head"><Reveal><p className="overline">Browse by room</p><h2>Made for living <i>beautifully.</i></h2></Reveal><Link className="quiet-button" href="/categories">View all collections</Link></div><div className="category-grid">{categories.map((cat, i) => <Reveal key={cat.name} delay={i * .06}><Link href={`/categories?category=${encodeURIComponent(cat.name)}`} className="category-card"><Image src={cat.image} alt={cat.name} fill sizes="(max-width: 700px) 100vw, 33vw" /><span className="card-wash" /><div><p className="overline">Collection</p><h3>{cat.name}</h3><span>View collection <b>→</b></span></div></Link></Reveal>)}</div></section>
    <section className="signature-section section-pad"><div className="section-head"><Reveal><p className="overline">The signature edit</p><h2>Pieces with a<br /><i>point of view.</i></h2></Reveal><Reveal delay={.12}><p className="section-sidecopy">Designed to be noticed slowly, then loved for a lifetime. Explore a selection from the Bed Bench collection.</p></Reveal></div><div className="products-grid">{products.slice(0, 3).map((product, i) => <Reveal delay={i * .1} key={product.name}><ProductCard product={product} /></Reveal>)}</div></section>
    <section className="values"><div className="values-heading"><p className="overline">The Bed Bench standard</p><h2>Designed around the way <i>you live.</i></h2></div><div className="values-grid">{[["spark", "Premium quality", "The character of honest materials, chosen without compromise."], ["ruler", "Elegant design", "Balanced proportions and timeless forms for every room."], ["hand", "Made to last", "Made with patience, by hands that know their craft."], ["leaf", "Personal service", "From first conversation to final placement, it is personal."]].map(([icon, title, text]) => <div className="value" key={title}><LineIcon type={icon} /><h3>{title}</h3><p>{text}</p></div>)}</div></section>
    <section className="quote-section"><Reveal><span className="quote-mark">“</span><blockquote>“The room feels like it has always known us. Every piece is quietly beautiful, and impossibly comfortable.”</blockquote><p className="overline">Ayesha &amp; Zain · Karachi</p></Reveal></section>
    <section className="visit-band"><div><p className="overline">Come and feel the difference</p><h2>Visit the<br /><i>showroom.</i></h2></div><div><p>Plaza No. 154, Block CCA2 Commercial Market DHA Phase 6,<br />Lahore, Pakistan</p><Link className="gold-button" href="/contact">Book a visit <span>→</span></Link></div></section>
  </main><Footer /></>;
}
