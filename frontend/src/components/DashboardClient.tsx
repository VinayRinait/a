'use client';

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { DashboardAnalytics } from '@/lib/analytics/types';

export function DashboardClient({ analytics }: { analytics: DashboardAnalytics }) {
  const kpiList = [
    { label: 'Total Raised', value: `$${analytics.kpis.totalRaised.toLocaleString()}` },
    { label: 'This Month', value: `$${analytics.kpis.monthlyRaised.toLocaleString()}` },
    { label: 'Avg Donation', value: `$${analytics.kpis.averageDonation.toLocaleString()}` },
    { label: 'Conversion', value: `${analytics.kpis.conversionRate}%` },
  ];

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-slate-100">
      <div className="mx-auto max-w-6xl space-y-8">
        <header>
          <h1 className="text-3xl font-bold">Donation Analytics Dashboard</h1>
          <p className="text-slate-400">Real-time campaign and donor performance overview.</p>
        </header>

        <section className="grid gap-4 md:grid-cols-4">
          {kpiList.map((kpi) => (
            <article key={kpi.label} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
              <p className="text-sm text-slate-400">{kpi.label}</p>
              <p className="mt-1 text-2xl font-semibold text-cyan-300">{kpi.value}</p>
            </article>
          ))}
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <h2 className="mb-4 text-xl font-semibold">Weekly Donation Trend</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={analytics.trends}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="date" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip />
                <Bar dataKey="donations" fill="#22d3ee" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <h2 className="mb-4 text-xl font-semibold">Campaign Performance</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400">
                  <th className="py-3">Campaign</th>
                  <th>Raised</th>
                  <th>Target</th>
                  <th>Donors</th>
                  <th>Progress</th>
                </tr>
              </thead>
              <tbody>
                {analytics.campaigns.map((campaign) => {
                  const progress = Math.round((campaign.raised / campaign.target) * 100);
                  return (
                    <tr key={campaign.campaign} className="border-b border-slate-900">
                      <td className="py-3 font-medium">{campaign.campaign}</td>
                      <td>${campaign.raised.toLocaleString()}</td>
                      <td>${campaign.target.toLocaleString()}</td>
                      <td>{campaign.donors.toLocaleString()}</td>
                      <td className="text-cyan-300">{progress}%</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
