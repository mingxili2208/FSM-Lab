import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import '@/app/globals.css';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'FSM Lab',
  description: 'Modular Lab Showcase Platform',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover', // 安全区域（刘海屏）
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col font-sans">
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen flex-1 bg-slate-950">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
