'use client';

import { useState } from 'react';

import RightActionSheetContainer from '@/components/action-sheets/Container';
import ScorePicker from '@/components/score-picker/ScorePicker';
import ToggleSwitch from '@/components/toggle-switch/ToggleSwitch';

import useToast from '../hooks/useToast';

export default function Home() {
  const [open, setOpen] = useState(false);
  const [score, setScore] = useState(0);

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
      <ToggleSwitch />

      <p className="font-title-16">폰트 테스트</p>
      <p className="font-designer">designer font test 012012</p>

      <button onClick={() => setOpen((prev) => !prev)}>open modal</button>

      <ScorePicker score={score} setScore={setScore} />

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
