import { Day, nextDay, previousDay } from 'date-fns';
import { useAtom } from 'jotai';

import ChevronLeft20Icon from '@/components/icons/ChevronLeft20Icon';
import ChevronRight20Icon from '@/components/icons/ChevronRight20Icon';
import { displayWeekAtom } from '@/stores/week/displayWeek';
import { getCurrentWeek } from '@/utils/date';

const WeekNavigator = () => {
  const [currentWeek, setCurrentWeek] = useAtom(displayWeekAtom);

  const handleClickPrev = () => {
    const prevWeek = previousDay(
      new Date(currentWeek.year, currentWeek.month - 1, currentWeek.date),
      currentWeek.day,
    );
    const { year, month, week } = getCurrentWeek(prevWeek);

    setCurrentWeek({
      year,
      month,
      week,
      date: prevWeek.getDate(),
      day: prevWeek.getDay(),
    });
  };

  const handleClickNext = () => {
    const nextWeek = nextDay(
      new Date(currentWeek.year, currentWeek.month - 1, currentWeek.date),
      currentWeek.day as Day,
    );
    const { year, month, week } = getCurrentWeek(nextWeek);

    setCurrentWeek({
      year,
      month,
      week,
      date: nextWeek.getDate(),
      day: nextWeek.getDay(),
    });
  };

  return (
    <div className="flex items-center gap-2">
      <p className="font-head-20 text-text-strong">
        {currentWeek.month}월 {currentWeek.week}주차
      </p>
      <div className="flex gap-1.5">
        <button
          className="bg-surface-foreground w-7 h-7 rounded-md flex items-center justify-center"
          onClick={handleClickPrev}
        >
          <ChevronLeft20Icon size={20} />
        </button>
        <button
          className="bg-surface-foreground w-7 h-7 rounded-md flex items-center justify-center"
          onClick={handleClickNext}
        >
          <ChevronRight20Icon size={20} />
        </button>
      </div>
    </div>
  );
};

export default WeekNavigator;
