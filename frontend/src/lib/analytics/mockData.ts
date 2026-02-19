import { DashboardAnalytics } from './types';

export const mockDashboardAnalytics: DashboardAnalytics = {
  kpis: {
    totalRaised: 1245600,
    monthlyRaised: 187900,
    averageDonation: 64,
    conversionRate: 7.4,
  },
  trends: [
    { date: 'Mon', donations: 22000 },
    { date: 'Tue', donations: 26000 },
    { date: 'Wed', donations: 21000 },
    { date: 'Thu', donations: 32000 },
    { date: 'Fri', donations: 28000 },
    { date: 'Sat', donations: 34000 },
    { date: 'Sun', donations: 24900 },
  ],
  campaigns: [
    { campaign: 'Education For All', raised: 42000, target: 60000, donors: 690 },
    { campaign: 'Medical Aid', raised: 76500, target: 100000, donors: 910 },
    { campaign: 'Flood Relief', raised: 91000, target: 120000, donors: 1304 },
  ],
};
