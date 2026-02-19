export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      <h1 className="text-4xl font-extrabold text-slate-900">Contact Us</h1>
      <p className="mt-3 text-slate-600">Need help with donations, receipts, or campaign verification? We are here to help.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-lg font-bold text-slate-900">Support</h2>
          <p className="mt-2 text-sm text-slate-600">Email: support@hopefund.org</p>
          <p className="text-sm text-slate-600">Phone: +91 98765 43210</p>
          <p className="text-sm text-slate-600">Hours: Mon-Sat, 9:00 AM - 7:00 PM</p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-lg font-bold text-slate-900">Office</h2>
          <p className="mt-2 text-sm text-slate-600">HopeFund Foundation</p>
          <p className="text-sm text-slate-600">Bengaluru, Karnataka, India</p>
          <p className="text-sm text-slate-600">For urgent campaign escalations, mention campaign ID in email subject.</p>
        </section>
      </div>
    </main>
  );
}
