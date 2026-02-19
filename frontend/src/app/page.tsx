import { CampaignGrid } from '@/components/CampaignGrid';
import { DonationHero } from '@/components/DonationHero';
import { FooterCta } from '@/components/FooterCta';
import { HowToDonate } from '@/components/HowToDonate';
import { TrustHighlights } from '@/components/TrustHighlights';

export default function HomePage() {
  return (
    <main>
      <DonationHero />
      <CampaignGrid />
      <HowToDonate />
      <TrustHighlights />
      <FooterCta />
    </main>
  );
}
