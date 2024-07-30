import { useState } from 'react';

import DatePicker from '@/components/date-picker/DatePicker';

import DateInput from './DateInput';

interface Props {
  date: { start: string; end: string };
  setDate: (date: { start: string; end: string }) => void;
}

const DateRangeInput = ({ date, setDate }: Props) => {
  const [showPicker, setShowPicker] = useState(false);

  return (
    <div className="relative">
      <div className="flex items-center gap-3 w-full">
        <DateInput
          placeholder="시작일"
          readOnly
          onClick={() => setShowPicker((prev) => !prev)}
          value={date.start}
        />
        <p className="font-body-14 text-neutral-90">-</p>
        <DateInput
          placeholder="마감일"
          readOnly
          onClick={() => setShowPicker((prev) => !prev)}
          value={date.end}
        />
      </div>

      {showPicker && <DatePicker date={date} setDate={setDate} />}
    </div>
  );
};

export default DateRangeInput;
