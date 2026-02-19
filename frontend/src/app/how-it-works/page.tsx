export default function HowItWorksPage() {
  const steps = [
    {
      title: 'Campaign verification',
      description: 'Our team checks identity documents and relevant medical/institutional paperwork before approval.',
    },
    {
      title: 'Secure donation processing',
      description: 'Donations are processed through secure payment channels with generated receipts for each transaction.',
    },
    {
      title: 'Impact and utilization updates',
      description: 'Campaign organizers submit updates and utilization proof so donors can track outcomes transparently.',
    },
  ];

  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      <h1 className="text-4xl font-extrabold text-slate-900">How HopeFund Works</h1>
      <p className="mt-3 max-w-3xl text-slate-600">We keep giving simple, safe, and transparent from campaign creation to final impact reporting.</p>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {steps.map((step) => (
          <article key={step.title} className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-slate-900">{step.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{step.description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
