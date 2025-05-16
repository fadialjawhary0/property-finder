import type { Metadata } from 'next';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: 'Property Finder App',
  description: 'Find your dream property with ease',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='min-w-[380px]'>
      <body className='min-w-[380px] overflow-x-hidden'>
        <div className='relative min-h-screen w-full'>{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
