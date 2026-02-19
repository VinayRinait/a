const campaigns = [
  { title: 'Education For All', raised: 42000, target: 60000, summary: 'Scholarships and school kits for under-resourced students.' },
  { title: 'Emergency Medical Aid', raised: 76500, target: 100000, summary: 'Critical care and medicines for families in urgent need.' },
  { title: 'Flood Relief 2026', raised: 91000, target: 120000, summary: 'Shelter, food, and rapid response support after disasters.' },
];

export function FeaturedCampaigns() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="text-3xl font-bold">Featured Campaigns</h2>
        <span className="text-sm text-slate-400">Updated live from Firebase</span>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {campaigns.map((campaign) => {
          const progress = Math.round((campaign.raised / campaign.target) * 100);
          return (
            <article key={campaign.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h3 className="text-xl font-semibold">{campaign.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{campaign.summary}</p>
              <p className="mt-3 text-sm text-slate-400">${campaign.raised.toLocaleString()} raised of ${campaign.target.toLocaleString()}</p>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800">
                <div className="h-full rounded-full bg-cyan-400" style={{ width: `${progress}%` }} />
              </div>
              <p className="mt-2 text-sm text-cyan-300">{progress}% funded</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
