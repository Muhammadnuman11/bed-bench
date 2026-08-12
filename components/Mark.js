export function BedBenchMark({ small = false, dark = false }) {
  return (
    <div className={`brand-mark ${small ? 'brand-mark--small' : ''} ${dark ? 'brand-mark--dark' : ''}`} aria-label="Bed Bench Premium Furniture">
      <span className="brand-top">BED</span><span className="mark-rule"><i />◆<i /></span><span className="brand-bottom">BENCH</span>
      <svg viewBox="0 0 330 40" role="img" aria-label="Bed and bench line illustration"><path d="M4 29c23-12 45 13 66 0V10m0 19h95v-12H78v-9h40v9h47c6 0 9 4 9 10v3c0 8 14 8 14 0v-2h83c14 0 7 12 14 12s6-13 41-22" /></svg><em>PREMIUM FURNITURE</em>
    </div>
  );
}

export function LineIcon({ type = 'spark' }) {
  const icons = {
    spark: <><path d="M12 2v7M12 15v7M2 12h7M15 12h7" /><path d="m5 5 4 4m6 6 4 4m0-14-4 4m-6 6-4 4" /></>,
    leaf: <><path d="M20 4C10 4 4 9 4 17c0 2 1 3 3 3 8 0 13-6 13-16Z" /><path d="M4 20c3-5 7-8 12-10" /></>,
    ruler: <><path d="m4 18 14-14 3 3L7 21l-3-3Z" /><path d="m10 12 2 2m2-5 2 2m2-5 2 2" /></>,
    hand: <><path d="M7 12V6a2 2 0 0 1 4 0v5m0-2V4a2 2 0 0 1 4 0v7m0-2V6a2 2 0 0 1 4 0v7" /><path d="M7 10 5 8a2 2 0 0 0-3 3l5 7c1 2 3 3 6 3h3c3 0 5-2 5-5v-4" /></>,
  };
  return <svg className="line-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">{icons[type]}</svg>;
}
