'use client';

import { useState } from 'react';

import CheckboxInput from '@/components/inputs/checkbox/CheckboxInput';
import Input from '@/components/inputs/input/Input';
import LineInput from '@/components/inputs/line/LineInput';
import NumberInput from '@/components/inputs/number/NumberInput';

export default function Home() {
  const [value, setValue] = useState('');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <p>Normal input</p>
        <Input placeholder="typing..." />
      </div>

      <div>
        <p>Number input</p>
        <NumberInput value={value} onChange={(e) => setValue(e.currentTarget.value)} />
      </div>

      <div>
        <p>Line input</p>
        <LineInput />
      </div>

      <div>
        <p>Checkbox input</p>
        <CheckboxInput />
      </div>
    </main>
  );
}
