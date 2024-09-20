import { useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';

import { displayWeekAtom } from '@/stores/week/displayWeek';
import { getCurrentWeek } from '@/utils/date';
import { cn } from '@/utils/tailwind';

const WeekInfo = () => {
  const [totalWeek, setTotalWeek] = useState(5);

  const currentWeek = useAtomValue(displayWeekAtom);

  useEffect(() => {
    const weekInfo = getCurrentWeek(
      new Date(currentWeek.year, currentWeek.month - 1, currentWeek.date),
    );

    setTotalWeek(weekInfo.totalWeek);
  }, [currentWeek]);

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: totalWeek }, (_, i) => (
        <WeekItem
          key={i}
          currentWeek={i + 1}
          active={currentWeek.week === i + 1}
        />
      ))}
    </div>
  );
};

export default WeekInfo;

interface WeekItemProps {
  currentWeek: number;
  active?: boolean;
}

const WeekItem = ({ currentWeek, active }: WeekItemProps) => {
  return (
    <div
      className={cn(
        'bg-surface-alternative px-2 py-0.5 rounded-sm -skew-x-12',
        active && 'bg-text-primary px-3.5',
      )}
    >
      <p
        className={cn(
          'text-text-neutral font-chakra text-lg font-bold leading-6',
          active && 'text-text-invert',
        )}
      >
        {active ? `Week ${currentWeek}` : currentWeek}
      </p>
    </div>
  );
};
