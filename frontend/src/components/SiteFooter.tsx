import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="text-xl font-extrabold text-slate-900">HopeFund</p>
          <p className="mt-2 max-w-md text-sm text-slate-600">
            A transparent donation platform connecting donors with verified medical, nutrition, and education campaigns.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-900">Quick links</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><Link href="/campaigns">Campaigns</Link></li>
            <li><Link href="/how-it-works">How it works</Link></li>
            <li><Link href="/about">About us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-900">Trust & support</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>Verification & KYC checks</li>
            <li>Secure donations</li>
            <li>Donation receipts</li>
            <li>Email: support@hopefund.org</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} HopeFund. All rights reserved.</div>
    </footer>
  );
}
