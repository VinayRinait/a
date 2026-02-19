export function HowToDonate() {
  const steps = [
    ['Choose a verified campaign', 'Read story, documents, and updates before donating.'],
    ['Donate securely in seconds', 'UPI/cards/net-banking with instant confirmation.'],
    ['Track impact', 'Get updates until campaign completion and utilization proof.'],
  ];

  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-14">
      <h2 className="text-3xl font-bold text-slate-900">How donating works</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {steps.map(([title, text], i) => (
          <article key={title} className="rounded-xl border border-slate-200 bg-white p-5">
            <p className="mb-2 text-xs font-bold text-orange-600">STEP {i + 1}</p>
            <h3 className="font-semibold text-slate-900">{title}</h3>
            <p className="mt-2 text-sm text-slate-600">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
