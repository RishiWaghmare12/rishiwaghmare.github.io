import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const title = 'Rishi Waghmare | Software Engineer & AI/ML Researcher';
const description =
  'Product Designer, Full-stack developer and AI/ML researcher specializing in quantum computing, building scalable applications and conducting cutting-edge research.';
const url = 'https://rishiwaghmare.dev';
const images = [
  {
    url: `${url}/og-image.png`,
    width: 1200,
    height: 630,
    alt: 'Rishi Waghmare - Software Engineer & Quantum Researcher',
  },
];

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: title,
    template: '%s | Rishi Waghmare',
  },
  description,
  keywords: [
    'Software Engineer',
    'Full Stack Developer',
    'AI/ML Engineer',
    'Quantum Computing',
    'Computer Engineering Student',
    'React',
    'Spring Boot',
    'Python',
    'Qiskit',
  ],
  authors: [{ name: 'Rishi Waghmare', url }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url,
    siteName: 'Rishi Waghmare',
    title,
    description,
    images,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: images.map((img) => img.url),
    creator: '@rishiwaghmare12',
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
  alternates: {
    canonical: url,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#030712',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <meta name="theme-color" content="#030712" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="bg-background text-text font-sans antialiased">
        <Header />
        <main className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
