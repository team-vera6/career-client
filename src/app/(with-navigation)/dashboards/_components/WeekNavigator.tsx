import { Day, nextDay, previousDay } from 'date-fns';
import { useAtom } from 'jotai';
import { useEffect, useMemo, useState } from 'react';

import { getDashboardData } from '@/apis/dashboard/get';
import ChevronLeft20Icon from '@/components/icons/ChevronLeft20Icon';
import ChevronRight20Icon from '@/components/icons/ChevronRight20Icon';
import { displayWeekAtom } from '@/stores/week/displayWeek';
import { getCurrentWeek, getNextWeek } from '@/utils/date';
import { isSameObject } from '@/utils/object';

const { year, month, week } = getCurrentWeek();

const WeekNavigator = () => {
  const [currentDisplayWeek, setCurrentDisplayWeek] = useAtom(displayWeekAtom);
  const [hasNextWeekTodo, setHasNextWeekTodo] = useState(false);

  // 다음 주 할 일이 있는지 확인합니다.
  useEffect(() => {
    const nextWeek = getNextWeek();

    (async () => {
      if (!isSameObject(nextWeek, { year, month, week })) return;

      const response = await getDashboardData({
        year: nextWeek.nextYear,
        month: nextWeek.nextMonth,
        week: nextWeek.nextWeek,
      });

      if (response.todos.length > 0) {
        setHasNextWeekTodo(true);
      }
    })();
  }, []);

  const handleClickPrev = () => {
    const prevWeek = previousDay(
      new Date(
        currentDisplayWeek.year,
        currentDisplayWeek.month - 1,
        currentDisplayWeek.date,
      ),
      currentDisplayWeek.day,
    );

    const { week } = getCurrentWeek(prevWeek);

    setCurrentDisplayWeek({
      year: prevWeek.getFullYear(),
      month: prevWeek.getMonth() + 1,
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
    const { week } = getCurrentWeek(nextWeek);

    setCurrentDisplayWeek({
      year: nextWeek.getFullYear(),
      month: nextWeek.getMonth() + 1,
      week,
      date: nextWeek.getDate(),
      day: nextWeek.getDay(),
    });
  };

  const goToCurrentWeek = () => {
    const now = new Date();

    setCurrentDisplayWeek({
      year,
      month,
      week,
      date: now.getDate(),
      day: now.getDay() === 0 ? now.getDay() : 4,
    });
  };

  const isCurrentWeek = useMemo(() => {
    return (
      currentDisplayWeek.year === year &&
      currentDisplayWeek.month === month &&
      currentDisplayWeek.week === week
    );
  }, [currentDisplayWeek]);

  const isLastWeek = useMemo(() => {
    const nextWeek = getNextWeek();

    if (!hasNextWeekTodo) return true;

    return (
      nextWeek.nextYear === year &&
      nextWeek.nextMonth === month &&
      nextWeek.nextWeek === week
    );
  }, [hasNextWeekTodo]);

  return (
    <div className="flex items-center gap-2">
      <p className="font-head-20 text-text-strong">
        {currentDisplayWeek.month}월 {currentDisplayWeek.week}주차 레이스
      </p>
      <div className="flex gap-1.5 items-center">
        <button
          type="button"
          className="bg-surface-foreground w-7 h-7 rounded-md flex items-center justify-center disabled:bg-surface-foregroundOn"
          onClick={handleClickPrev}
          disabled={
            currentDisplayWeek.year === 2024 &&
            currentDisplayWeek.month === 1 &&
            currentDisplayWeek.week === 1
          }
        >
          <ChevronLeft20Icon size={20} />
        </button>
        <button
          type="button"
          className="bg-surface-foreground w-7 h-7 rounded-md flex items-center justify-center disabled:bg-surface-foregroundOn"
          onClick={handleClickNext}
          disabled={isLastWeek}
        >
          <ChevronRight20Icon size={20} />
        </button>

        <button
          type="button"
          className="button-line button-small ml-1"
          onClick={goToCurrentWeek}
          disabled={isCurrentWeek}
        >
          이번주
        </button>
      </div>
    </div>
  );
};

export default WeekNavigator;
