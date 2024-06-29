'use client';

import { useState } from 'react';

import RightActionSheetContainer from '@/components/action-sheets/Container';

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-state-caution w-11 h-11" />

      <p className="font-title-16">폰트 테스트</p>
      <p className="font-designer">designer font test 012012</p>

      <button onClick={() => setOpen((prev) => !prev)}>open modal</button>

      {open && (
        <RightActionSheetContainer
          closeActionSheet={() => setOpen(false)}
          buttons={[
            { text: '취소', onClick: () => setOpen(false) },
            { text: '저장', onClick: () => setOpen(false) },
          ]}
        >
          <p>hihii</p>
        </RightActionSheetContainer>
      )}
    </main>
  );
}
