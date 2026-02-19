export function TopNav() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div>
          <p className="text-xl font-extrabold text-slate-900">HopeFund</p>
          <p className="text-xs text-slate-500">Verified giving platform</p>
        </div>
        <nav className="hidden gap-6 text-sm font-medium text-slate-700 md:flex">
          <a href="#campaigns">Campaigns</a>
          <a href="#how-it-works">How it works</a>
          <a href="#trust">Trust & reports</a>
        </nav>
        <button className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-500">Start Donating</button>
      </div>
    </header>
  );
}
