import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/campaigns', label: 'Campaigns' },
  { href: '/how-it-works', label: 'How it Works' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function SiteNavbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="leading-tight">
          <p className="text-xl font-extrabold text-slate-900">HopeFund</p>
          <p className="text-xs text-slate-500">Verified giving platform</p>
        </Link>

        <nav className="hidden items-center gap-5 text-sm font-medium text-slate-700 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-slate-900">
              {item.label}
            </Link>
          ))}
          <Link href="/dashboard" className="rounded-lg border border-slate-300 px-3 py-1.5 text-slate-700 hover:bg-slate-50">
            Dashboard
          </Link>
        </nav>

        <Link href="/campaigns" className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-500">
          Donate Now
        </Link>
      </div>
    </header>
  );
}
