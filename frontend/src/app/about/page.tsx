export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      <h1 className="text-4xl font-extrabold text-slate-900">About HopeFund</h1>
      <p className="mt-3 max-w-3xl text-slate-600">
        HopeFund is built to connect generous donors with verified needs across healthcare, nutrition, and education. We focus on transparency,
        accountability, and measurable outcomes.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        <article className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="font-bold text-slate-900">Our mission</h2>
          <p className="mt-2 text-sm text-slate-600">Enable trusted giving at scale with low friction and high accountability.</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="font-bold text-slate-900">Our approach</h2>
          <p className="mt-2 text-sm text-slate-600">KYC checks, campaign vetting, real-time updates, and receipts for every donor.</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="font-bold text-slate-900">Our promise</h2>
          <p className="mt-2 text-sm text-slate-600">A secure and transparent ecosystem where every contribution is traceable.</p>
        </article>
      </div>
    </main>
  );
}
