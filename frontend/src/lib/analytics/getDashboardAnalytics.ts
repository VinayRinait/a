import { mockDashboardAnalytics } from './mockData';
import { DashboardAnalytics } from './types';

export async function getDashboardAnalytics(): Promise<DashboardAnalytics> {
  return mockDashboardAnalytics;
}
