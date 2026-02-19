import { CampaignGrid } from '@/components/CampaignGrid';
import { DonationHero } from '@/components/DonationHero';
import { FooterCta } from '@/components/FooterCta';
import { HowToDonate } from '@/components/HowToDonate';
import { TopNav } from '@/components/TopNav';
import { TrustHighlights } from '@/components/TrustHighlights';

export default function HomePage() {
  return (
    <main>
      <TopNav />
      <DonationHero />
      <CampaignGrid />
      <HowToDonate />
      <TrustHighlights />
      <FooterCta />
    </main>
  );
}
