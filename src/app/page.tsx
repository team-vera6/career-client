'use client';

import { useState } from 'react';

import Alert from '@/components/modal/Alert';
import ScorePicker from '@/components/score-picker/ScorePicker';
import ToggleSwitch from '@/components/toggle-switch/ToggleSwitch';

export default function Home() {
  const [open, setOpen] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-state-caution w-11 h-11" />

      <ToggleSwitch />

      <p className="font-title-16">폰트 테스트</p>
      <p className="font-designer">designer font test 012012</p>

      <button onClick={() => setOpen((prev) => !prev)}>open modal</button>

      <ScorePicker score={score} setScore={setScore} />

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
