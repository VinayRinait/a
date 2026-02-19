import type { Metadata } from 'next';
import './globals.css';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteNavbar } from '@/components/SiteNavbar';

export const metadata: Metadata = {
  title: 'HopeFund | Donation Platform',
  description: 'Modern donation platform with analytics dashboard.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteNavbar />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
