import Link from 'next/link'; import Image from 'next/image'; import Header from '@/components/Header'; import Footer from '@/components/Footer'; import Reveal from '@/components/Reveal'; import { LineIcon } from '@/components/Mark';
export default function About() {
    const values = [['hand', 'Craftsmanship', 'We believe furniture should carry the trace of the maker, and the quiet confidence of work done well.'], ['leaf', 'Honest materials', 'We choose enduring timber, tactile textiles and fine metals that grow more beautiful with use.'], ['spark', 'Timeless design', 'Our pieces resist the moment. Their simplicity makes space for the stories you bring to them.']];
    return <>
        <Header />
        <main>
            <section className="page-hero about-hero">
                <div>
                    <p className="overline">Since 1998</p>
                    <h1>About <i>Bed Bench.</i></h1>
                </div>
            </section>
            <section className="story-section section-pad">
                <Reveal>
                    <p className="overline">Our story</p>
                    <h2>A home should feel<br />like <i>your own.</i></h2></Reveal><Reveal delay={.12} className="story-copy"><p>Bed Bench began with a small workshop, a few well-worn tools and an uncomplicated belief: the things we live with should be built with care. Nearly three decades later, that belief still shapes every piece that leaves our workshop.</p><p>We make furniture that feels at ease from the first day — expressive but not excessive, expertly made but never precious.</p>
                    <Link className="text-link" href="/categories">Explore our collections <b>→</b></Link>
                </Reveal>
            </section>
            <section className="image-quote">
                <div className="image-panel">
                    <Image fill sizes="60vw" src="/about-img-02.JPG" alt="Furniture workshop" />
                </div>
                <div>
                    <p className="overline">Made with intention</p>
                    <blockquote>“We design for the life that happens around the furniture.”</blockquote>
                    <span>— Our founding principle</span>
                </div>
            </section>
            <section className="values about-values section-pad">
                <div className="values-heading">
                    <p className="overline">What guides us</p>
                    <h2>Quiet confidence,<br /><i>lasting value.</i></h2>
                </div>
                <div className="values-grid">{values.map(([icon, title, text]) => <Reveal key={title}><div className="value"><LineIcon type={icon} /><h3>{title}</h3><p>{text}</p></div></Reveal>)}</div></section><section className="process section-pad"><p className="overline">The Bed Bench process</p><h2>From an idea to<br />an <i>everyday heirloom.</i></h2><div className="process-steps">{['Design', 'Material selection', 'Handcrafting', 'Quality check', 'Delivery'].map((step, i) => <Reveal delay={i * .07} key={step}><div><span>0{i + 1}</span><h3>{step}</h3></div></Reveal>)}</div></section><section className="cta-dark"><p className="overline">Made for your space</p><h2>Discover the<br /><i>collections.</i></h2><Link className="gold-button" href="/categories">View collections <span>→</span></Link></section></main><Footer /></>;
}
