'use client';

import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1 text-xs tracking-wide text-cyan-300">
            Donor-first • Verified Campaigns • Real-time Transparency
          </p>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">Donate with Confidence. See Real Impact.</h1>
          <p className="text-slate-300">
            HopeFund helps you support trusted causes with complete clarity. From campaign verification to utilization updates, every step is visible so you always know your donation is creating change.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400">
              Donate Now
            </button>
            <button className="rounded-xl border border-slate-700 px-5 py-3 font-semibold hover:border-slate-500">
              How We Verify Causes
            </button>
          </div>
          <p className="text-xs text-slate-400">4.9/5 donor trust rating • 120K+ successful donations • 100% auditable records</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-2xl shadow-cyan-950/30"
        >
          <div className="grid gap-4">
            {[
              ['Total Raised', '$1.2M'],
              ['Active Campaigns', '84'],
              ['Monthly Donors', '9,340'],
              ['Funds Reported', '98.7%'],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <p className="text-sm text-slate-400">{label}</p>
                <p className="text-2xl font-bold text-cyan-300">{value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
