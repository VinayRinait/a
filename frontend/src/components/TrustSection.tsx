import Image from 'next/image';

const trustPoints = [
  {
    title: 'Verified campaigns only',
    description: 'Every fundraiser is manually reviewed with identity and document verification before publishing.',
  },
  {
    title: 'Transparent fund tracking',
    description: 'Donors can see raised amount, goal progress, and milestone updates in real time.',
  },
  {
    title: 'Secure payment workflow',
    description: 'Payments are handled with encrypted gateways and auditable records for each donation.',
  },
];

export function TrustSection() {
  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-20 md:grid-cols-2 md:items-center">
      <div className="space-y-5">
        <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">Why donors trust us</p>
        <h2 className="text-3xl font-bold md:text-4xl">Safe, transparent, and built for long-term impact.</h2>
        <p className="text-slate-300">
          We designed HopeFund so first-time visitors instantly understand where money goes, how impact is measured, and how campaigns are validated.
        </p>
        <div className="space-y-4">
          {trustPoints.map((point) => (
            <article key={point.title} className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
              <h3 className="font-semibold text-cyan-200">{point.title}</h3>
              <p className="mt-1 text-sm text-slate-400">{point.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-3">
        <Image
          src="/impact-health.svg"
          width={800}
          height={500}
          alt="Medical aid campaign impact visualization"
          className="h-auto w-full rounded-xl"
          priority
        />
      </div>
    </section>
  );
}
