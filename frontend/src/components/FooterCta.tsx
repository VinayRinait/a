export function FooterCta() {
  return (
    <section className="bg-slate-900 py-12 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 md:flex-row md:items-center">
        <div>
          <h3 className="text-2xl font-bold">Your contribution can save a life today.</h3>
          <p className="text-sm text-slate-300">Join thousands of donors supporting urgent verified needs.</p>
        </div>
        <button className="rounded-lg bg-orange-500 px-5 py-2.5 font-semibold hover:bg-orange-400">Donate now</button>
      </div>
    </section>
  );
}
