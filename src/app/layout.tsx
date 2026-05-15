import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header/Header';
import { AuthProvider } from '@/context/AuthContext';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';

const montserrat = Montserrat({
  variable: '--font-heading',
  subsets: ['latin'],
});

const openSans = Open_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'DevConsult - dev consultancy support',
  description: 'Dev consultancy support application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={cn('font-sans', openSans.variable)}>
      <body
        className={`${montserrat.variable} antialiased bg-background text-foreground text-base grid grid-rows-[auto_1fr_auto] min-h-dvh`}>
        <AuthProvider>
          <Header />
          <main className='min-w-0'>{children}</main>
          <Footer />
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
