'use client';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './date-picker.css';

import { addWeeks } from 'date-fns';
import { ko } from 'date-fns/locale';
import { useState } from 'react';
import { DateRange, Range } from 'react-date-range';

import colors from '@/styles/colors';

const DatePicker = () => {
  const [date, setDate] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: addWeeks(new Date(), 1),
      key: 'selection',
    },
  ]);

  return (
    <DateRange
      onChange={(item) => setDate([item.selection])}
      direction="horizontal"
      months={2}
      locale={ko}
      ranges={date}
      color={colors.surface.background}
      monthDisplayFormat="yyyy년 MMM"
      showDateDisplay={false}
      showMonthAndYearPickers={false}
      moveRangeOnFirstSelection={false}
      fixedHeight
      showPreview={false}
    />
  );
};

export default DatePicker;
