import './globals.css';

import ToastContainer from '@/components/toast/ToastContainer';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

const pretendard = localFont({
  src: '../assets/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

const designer = localFont({
  src: '../assets/fonts/Designer.otf',
  display: 'swap',
  variable: '--font-designer',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.variable} ${designer.variable} font-pretendard`}>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
