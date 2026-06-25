import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: 'PipBud - AI Trading Coach & Journal for Forex Traders | Smart Trade Analytics',
  description: 'PipBud is your AI-powered trading companion on Telegram. Log trades via screenshots, get AI coaching, track performance with beautiful analytics. Built for SMC/ICT traders.',
  keywords: 'trading journal, AI trading coach, forex bot, telegram trading bot, SMC trading, ICT trading, trade analytics, forex journal, trading psychology',
  openGraph: {
    title: 'PipBud - AI Trading Coach & Journal',
    description: 'Level up your trading with AI-powered insights. Free on Telegram.',
    url: 'https://pipbud.io',
    siteName: 'PipBud',
    images: [
      {
        url: 'https://pipbud.io/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PipBud - AI Trading Coach & Journal',
    description: 'Level up your trading with AI-powered insights. Free on Telegram.',
    images: ['https://pipbud.io/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-black text-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}