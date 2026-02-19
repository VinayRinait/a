import { DashboardClient } from '@/components/DashboardClient';
import { getDashboardAnalytics } from '@/lib/analytics/getDashboardAnalytics';

export default async function DashboardPage() {
  const analytics = await getDashboardAnalytics();
  return <DashboardClient analytics={analytics} />;
}
