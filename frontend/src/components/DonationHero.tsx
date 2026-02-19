export function DonationHero() {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-14">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2 md:items-center">
        <div className="space-y-5">
          <p className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">100% transparent giving</p>
          <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">Donate to urgent causes and track every rupee.</h1>
          <p className="text-slate-600">Support medical care, nutrition, and education campaigns. Every campaign is verified and every donation includes updates and impact proof.</p>
          <div className="grid grid-cols-3 gap-3 rounded-xl border border-slate-200 bg-white p-4 text-center">
            <div><p className="text-xl font-bold text-slate-900">120K+</p><p className="text-xs text-slate-500">Donors</p></div>
            <div><p className="text-xl font-bold text-slate-900">₹18Cr+</p><p className="text-xs text-slate-500">Raised</p></div>
            <div><p className="text-xl font-bold text-slate-900">4.9/5</p><p className="text-xs text-slate-500">Trust Score</p></div>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-slate-800">Find a cause to support</p>
          <input className="mt-3 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="Search by child name, category, or hospital" />
          <div className="mt-4 flex flex-wrap gap-2">
            {['Medical', 'Nutrition', 'Education', 'Emergency'].map((tag) => (
              <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">{tag}</span>
            ))}
          </div>
          <button className="mt-5 w-full rounded-lg bg-orange-500 px-4 py-2 font-semibold text-white hover:bg-orange-400">Browse Live Campaigns</button>
        </div>
      </div>
    </section>
  );
}
