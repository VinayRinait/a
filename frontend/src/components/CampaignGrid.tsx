import Image from 'next/image';

const causes = [
  {
    title: 'Help Aarav with emergency heart surgery',
    image: '/cause-medical.svg',
    raised: 845000,
    goal: 1200000,
    supporters: 1342,
    urgency: 'Critical',
  },
  {
    title: 'Monthly nutrition kits for 400 children',
    image: '/cause-food.svg',
    raised: 318000,
    goal: 500000,
    supporters: 826,
    urgency: 'High',
  },
  {
    title: 'School kits and books for rural students',
    image: '/cause-education.svg',
    raised: 461000,
    goal: 650000,
    supporters: 1098,
    urgency: 'Urgent',
  },
];

export function CampaignGrid() {
  return (
    <section id="campaigns" className="mx-auto max-w-6xl px-6 py-14">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="text-3xl font-bold text-slate-900">Urgent campaigns you can help today</h2>
        <a className="text-sm font-semibold text-orange-600" href="#">View all</a>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {causes.map((cause) => {
          const progress = Math.min(100, Math.round((cause.raised / cause.goal) * 100));
          return (
            <article key={cause.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <Image src={cause.image} alt={cause.title} width={640} height={360} className="h-44 w-full object-cover" />
              <div className="p-4">
                <p className="mb-2 inline-flex rounded-full bg-red-100 px-2.5 py-1 text-xs font-semibold text-red-700">{cause.urgency}</p>
                <h3 className="text-sm font-semibold text-slate-900">{cause.title}</h3>
                <p className="mt-2 text-sm text-slate-600">₹{cause.raised.toLocaleString()} raised of ₹{cause.goal.toLocaleString()}</p>
                <div className="mt-3 h-2 rounded-full bg-slate-200">
                  <div className="h-2 rounded-full bg-emerald-500" style={{ width: `${progress}%` }} />
                </div>
                <p className="mt-2 text-xs text-slate-500">{cause.supporters.toLocaleString()} supporters • {progress}% funded</p>
                <button className="mt-4 w-full rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-500">Donate now</button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
