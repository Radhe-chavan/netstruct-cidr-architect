import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import { CookieConsent } from '@/components/layout/cookie-consent';

export const metadata: Metadata = {
  title: 'NetStruct - CIDR & Subnet Architect',
  description: 'Design efficient IPv4 architectures, calculate subnets, and optimize network topologies with precision CIDR tools.',
  icons: {
    icon: '/favicon.ico',
  },
  keywords: [
    'subnet calculator',
    'CIDR architect',
    'IPv4 planning',
    'network topology',
    'VPC optimization',
    'broadcast domain management'
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        {/* ✅ Google AdSense script - Using template's approved pattern */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5192301125428658"
          crossOrigin="anonymous"
        ></script>
        <meta name="google-adsense-account" content="ca-pub-5192301125428658"></meta>
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
        <Toaster />
        <CookieConsent />
      </body>
    </html>
  );
}
