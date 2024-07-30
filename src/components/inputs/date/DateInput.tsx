import { InputHTMLAttributes } from 'react';

import CalendarIcon from '@/components/icons/CalendarIcon';

import Input from '../input/Input';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  errorText?: string;
}

const DateInput = (props: Props) => {
  return (
    <div className="relative w-full">
      <Input {...props} />

      <CalendarIcon size={20} className="absolute top-3 right-3" />
    </div>
  );
};

export default DateInput;
