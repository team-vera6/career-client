'use client';

import { useState } from 'react';

import Alert from '@/components/modal/Alert';

import useToast from '../hooks/useToast';

export default function Home() {
  const [open, setOpen] = useState(false);

  const { addToast } = useToast();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-state-caution w-11 h-11" />

      <button
        className="button-primary button-large"
        onClick={() => addToast({ message: 'Success!', iconType: 'error' })}
      >
        버튼 테스트
      </button>
      <button className="button-primary button-large" onClick={() => addToast({ message: 'you!' })}>
        버튼 테스트
      </button>

      <button
        className="button-primary button-large"
        onClick={() => addToast({ message: 'Success!', iconType: 'error' })}
      >
        버튼 테스트
      </button>
      <button className="button-primary button-large" onClick={() => addToast({ message: 'you!' })}>
        버튼 테스트
      </button>

      <p className="font-title-16">폰트 테스트</p>
      <p className="font-designer">designer font test 012012</p>

      <button onClick={() => setOpen((prev) => !prev)}>open modal</button>

      {open && (
        <Alert
          closeAlert={() => setOpen(false)}
          title="정말로 삭제하시겠어요?"
          buttons={{
            left: {
              text: '버튼',
            },
            right: {
              text: '버튼',
            },
          }}
        />
      )}
    </main>
  );
}
