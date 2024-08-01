'use client';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './date-picker.css';

import { addWeeks, format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { useEffect, useState } from 'react';
import { DateRange, Range } from 'react-date-range';

import colors from '@/styles/colors';

interface Props {
  date?: { start: string; end: string };
  setDate?: (date: { start: string; end: string }) => void;
}

const DatePicker = ({ date, setDate }: Props) => {
  const [selectedDate, setSelectedDate] = useState<Range[]>(
    date?.start
      ? [
          {
            startDate: new Date(date.start),
            endDate: new Date(date.end),
            key: 'selection',
          },
        ]
      : [
          {
            startDate: new Date(),
            endDate: addWeeks(new Date(), 1),
            key: 'selection',
          },
        ],
  );

  useEffect(() => {
    if (
      !setDate ||
      !selectedDate[0] ||
      !selectedDate[0].startDate ||
      !selectedDate[0].endDate
    )
      return;

    setDate({
      start: format(selectedDate[0].startDate, 'yyyy.M.d'),
      end: format(selectedDate[0].endDate, 'yyyy.M.d'),
    });
  }, [setDate, selectedDate]);

  return (
    <DateRange
      onChange={(item) => setSelectedDate([item.selection])}
      direction="horizontal"
      months={2}
      locale={ko}
      ranges={selectedDate}
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
