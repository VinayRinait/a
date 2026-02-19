import { FeaturedCampaigns } from '@/components/FeaturedCampaigns';
import { HeroSection } from '@/components/HeroSection';
import { HowItWorks } from '@/components/HowItWorks';
import { ImpactStats } from '@/components/ImpactStats';
import { TransparencySection } from '@/components/TransparencySection';
import { TrustSection } from '@/components/TrustSection';

export default function HomePage() {
  return (
    <main className="gradient-bg min-h-screen">
      <HeroSection />
      <ImpactStats />
      <TrustSection />
      <HowItWorks />
      <FeaturedCampaigns />
      <TransparencySection />
    </main>
  );
}
