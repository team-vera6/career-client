'use client';

import { useState } from 'react';

import Input from '@/components/inputs/Input';
import NumberInput from '@/components/inputs/NumberInput';
import Textarea from '@/components/inputs/Textarea';

export default function Home() {
  const [value, setValue] = useState('');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-state-caution w-11 h-11" />

      <p className="font-title-16">폰트 테스트</p>
      <p className="font-designer">designer font test 012012</p>

      <div>
        <p>Normal input</p>
        <Input placeholder="typing..." />
      </div>

      <div>
        <p>Number input</p>
        <NumberInput value={value} onChange={(e) => setValue(e.currentTarget.value)} />
      </div>

      <div>
        <p>Textarea</p>
        <Textarea />
      </div>
    </main>
  );
}
