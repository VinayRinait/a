import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HopeFund | Donation Platform',
  description: 'Modern donation platform with analytics dashboard.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
