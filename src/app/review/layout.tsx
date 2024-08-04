import Link from 'next/link';

import TextLogo from '@/components/icons/TextLogo';

import { WeekInfo } from './_components/week-info/WeekInfo';
import WeeklyMemo from './_components/weekly-memo/WeeklyMemo';

export default function ReviewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-full px-12 max-w-[106rem] min-w-[74.25rem] pt-10 mx-auto">
      <header>
        <Link href="/">
          <TextLogo />
        </Link>
      </header>

      <div className="w-full h-full pt-[3.75rem] flex">
        <aside className="flex flex-col gap-[2.125rem]">
          <p className="font-title-16 text-text-strong">이번주 작성한 메모</p>
          <WeeklyMemo />
        </aside>

        <main className="h-full w-[44.25rem] mx-auto">
          <WeekInfo />
          {children}
        </main>
      </div>
    </div>
  );
}
