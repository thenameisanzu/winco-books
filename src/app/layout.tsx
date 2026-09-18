import type { Metadata, Viewport } from 'next';
import { Fraunces, Newsreader } from 'next/font/google';
import './globals.css';

const display = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  axes: ['SOFT', 'WONK', 'opsz'],
});

const body = Newsreader({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://wincobooks.com'),
  title: 'Winco Books — Independent book publishing in India',
  description:
    'Winco Books helps authors turn manuscripts and ideas into professionally published books — editing, cover design, formatting, print and eBook publishing, distribution and marketing. English and Malayalam.',
  keywords: [
    'book publishing India',
    'self publishing India',
    'publish a book in Malayalam',
    'book cover design',
    'manuscript editing',
    'ghostwriting India',
    'ISBN assistance',
  ],
  openGraph: {
    title: 'Winco Books — Publishing ideas. Empowering authors.',
    description:
      'Professional publishing support for authors, from manuscript to reader. Based in India, with a global outlook.',
    type: 'website',
    locale: 'en_IN',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#F1EFEA',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
