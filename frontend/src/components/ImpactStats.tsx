export function ImpactStats() {
  const stats = [
    { label: 'Meals Sponsored', value: '245K+' },
    { label: 'Students Supported', value: '31K+' },
    { label: 'Medical Grants', value: '8.4K+' },
    { label: 'Countries Reached', value: '27' },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 pb-16">
      <div className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="rounded-xl bg-slate-950/60 p-4">
            <p className="text-sm text-slate-400">{item.label}</p>
            <p className="text-2xl font-semibold text-cyan-300">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
