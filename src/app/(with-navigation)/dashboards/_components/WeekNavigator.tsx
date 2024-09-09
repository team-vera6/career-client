import { Day, nextDay, previousDay } from 'date-fns';
import { useAtom } from 'jotai';

import ChevronLeft20Icon from '@/components/icons/ChevronLeft20Icon';
import ChevronRight20Icon from '@/components/icons/ChevronRight20Icon';
import { displayWeekAtom } from '@/stores/week/displayWeek';
import { getCurrentWeek } from '@/utils/date';

const { year, month, week } = getCurrentWeek();

const WeekNavigator = () => {
  const [currentDisplayWeek, setCurrentDisplayWeek] = useAtom(displayWeekAtom);

  const handleClickPrev = () => {
    const prevWeek = previousDay(
      new Date(
        currentDisplayWeek.year,
        currentDisplayWeek.month - 1,
        currentDisplayWeek.date,
      ),
      currentDisplayWeek.day,
    );
    const { year, month, week } = getCurrentWeek(prevWeek);

    setCurrentDisplayWeek({
      year,
      month,
      week,
      date: prevWeek.getDate(),
      day: prevWeek.getDay(),
    });
  };

  const handleClickNext = () => {
    const nextWeek = nextDay(
      new Date(
        currentDisplayWeek.year,
        currentDisplayWeek.month - 1,
        currentDisplayWeek.date,
      ),
      currentDisplayWeek.day as Day,
    );
    const { year, month, week } = getCurrentWeek(nextWeek);

    setCurrentDisplayWeek({
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
        {currentDisplayWeek.month}월 {currentDisplayWeek.week}주차
      </p>
      <div className="flex gap-1.5">
        <button
          className="bg-surface-foreground w-7 h-7 rounded-md flex items-center justify-center"
          onClick={handleClickPrev}
        >
          <ChevronLeft20Icon size={20} />
        </button>
        <button
          className="bg-surface-foreground w-7 h-7 rounded-md flex items-center justify-center disabled:bg-surface-foregroundOn"
          onClick={handleClickNext}
          disabled={
            currentDisplayWeek.year === year &&
            currentDisplayWeek.month === month &&
            currentDisplayWeek.week === week
          }
        >
          <ChevronRight20Icon size={20} />
        </button>
      </div>
    </div>
  );
};

export default WeekNavigator;
