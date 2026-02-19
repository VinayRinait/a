import Image from 'next/image';

export function TransparencySection() {
  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-24 md:grid-cols-2 md:items-center">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-3">
        <Image
          src="/campaign-education.svg"
          width={800}
          height={500}
          alt="Education fundraising campaign visual"
          className="h-auto w-full rounded-xl"
        />
      </div>

      <div className="space-y-5">
        <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">Transparency promise</p>
        <h2 className="text-3xl font-bold md:text-4xl">Every donation has a visible journey.</h2>
        <ul className="space-y-3 text-slate-300">
          <li>• Live fundraising progress and milestone updates.</li>
          <li>• Campaign spending summaries and impact reports.</li>
          <li>• Donor receipts and downloadable transaction history.</li>
          <li>• Admin dashboard for performance monitoring and compliance checks.</li>
        </ul>
        <button className="rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400">
          Explore Live Campaigns
        </button>
      </div>
    </section>
  );
}
