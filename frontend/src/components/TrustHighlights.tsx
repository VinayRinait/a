export function TrustHighlights() {
  const items = [
    'KYC + medical/billing document checks before campaign goes live',
    'Daily campaign updates and post-utilization proof shared with donors',
    'Secure payment flow and downloadable receipts for every donation',
    'Dedicated fraud monitoring and escalation response team',
  ];

  return (
    <section id="trust" className="bg-slate-50 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-slate-900">Why people trust HopeFund</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <article key={item} className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700">✅ {item}</article>
          ))}
        </div>
      </div>
    </section>
  );
}
