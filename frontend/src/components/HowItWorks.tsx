const steps = [
  {
    title: '1) Discover a verified cause',
    description: 'Browse impact categories and review campaign details, budgets, and organizer background.',
  },
  {
    title: '2) Donate in under 60 seconds',
    description: 'Choose an amount, complete secure checkout, and receive an instant confirmation receipt.',
  },
  {
    title: '3) Track your impact',
    description: 'Follow updates, milestone achievements, and final utilization reports directly from your dashboard.',
  },
];

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <div className="mb-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">How it works</p>
        <h2 className="mt-2 text-3xl font-bold md:text-4xl">Simple for donors. Powerful for impact teams.</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {steps.map((step) => (
          <article key={step.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="text-lg font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm text-slate-400">{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
