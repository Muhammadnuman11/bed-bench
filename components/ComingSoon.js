import { BedBenchMark } from './Mark';

export default function ComingSoon() {
  return (
    <main className="coming-soon">
      <div className="coming-soon__texture" aria-hidden="true" />
      <div className="coming-soon__content">
        <BedBenchMark />
        {/* <p className="overline">A new standard of living</p> */}
        <h1>Something <i>beautiful</i><br />is taking shape.</h1>
        <p className="coming-soon__copy">Our collection is being prepared with the care and attention it deserves. We look forward to welcoming you soon.</p>
        {/* <a className="coming-soon__whatsapp" href="https://wa.me/923212111134?text=Hello%20Bed%20Bench%2C%20I%27d%20like%20to%20know%20more%20about%20your%20furniture.">Enquire on WhatsApp <span>→</span></a> */}
      </div>
      {/* <div className="coming-soon__details">
        <div><span>Visit us</span><p>Plaza No. 154, Block CCA2 Commercial Market<br />DHA Phase 6, Lahore</p></div>
        <div><span>WhatsApp</span><a href="https://wa.me/923212111134">0321 2111134</a></div>
      </div>
      <p className="coming-soon__footer">© 2026 Bed Bench · Premium Furniture</p> */}
    </main>
  );
}
