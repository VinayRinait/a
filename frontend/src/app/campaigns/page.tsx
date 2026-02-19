import { CampaignGrid } from '@/components/CampaignGrid';

export default function CampaignsPage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-4xl font-extrabold text-slate-900">Live Campaigns</h1>
        <p className="mt-2 text-slate-600">Browse verified causes and donate where help is needed most.</p>
      </section>
      <CampaignGrid />
    </main>
  );
}
