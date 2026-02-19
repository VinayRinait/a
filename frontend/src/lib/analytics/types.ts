export type KpiMetrics = {
  totalRaised: number;
  monthlyRaised: number;
  averageDonation: number;
  conversionRate: number;
};

export type TrendPoint = {
  date: string;
  donations: number;
};

export type CampaignPerformance = {
  campaign: string;
  raised: number;
  target: number;
  donors: number;
};

export type DashboardAnalytics = {
  kpis: KpiMetrics;
  trends: TrendPoint[];
  campaigns: CampaignPerformance[];
};
