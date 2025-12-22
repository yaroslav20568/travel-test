import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { nameApp } from '@/shared';

import '@/shared/styles';

const interSans = Inter({
  variable: '--font-inter',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: nameApp,
  description: `${nameApp}: Innovative, Reliable, Skyward`
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={interSans.variable}>{children}</body>
    </html>
  );
}
