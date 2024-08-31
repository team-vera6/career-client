import './globals.css';

import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import type { Metadata } from 'next';
// eslint-disable-next-line camelcase
import { Chakra_Petch } from 'next/font/google';
import localFont from 'next/font/local';

import ToastContainer from '@/components/toast/ToastContainer';

const pretendard = localFont({
  src: '../assets/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

const chakraPetch = Chakra_Petch({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-chakra',
});

export const metadata: Metadata = {
  title: 'Pitstop',
  description: '회고를 위한 가장 쉬운 선택, Pitstop',
  keywords: 'Pitstop, 회고, 커리어',
  icons: [
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${pretendard.variable} ${chakraPetch.variable}`}
    >
      <GoogleTagManager gtmId="GTM-W4V33S62" />

      <body className="font-pretendard bg-surface-background">
        {children}
        <ToastContainer />
      </body>

      <GoogleAnalytics gaId="G-7NRSYRP43M" />
    </html>
  );
}
