import ChevronLeft20Icon from '@/components/icons/ChevronLeft20Icon';
import ChevronRight20Icon from '@/components/icons/ChevronRight20Icon';
import { getCurrentWeek } from '@/utils/date';

const { month, week } = getCurrentWeek();

const WeekNavigator = () => {
  return (
    <div className="flex items-center gap-2">
      <p className="font-head-20 text-text-strong">
        {month}월 {week}주차
      </p>
      <div className="flex gap-1.5">
        <button className="bg-surface-foreground w-7 h-7 rounded-md flex items-center justify-center">
          <ChevronLeft20Icon size={20} />
        </button>
        <button className="bg-surface-foreground w-7 h-7 rounded-md flex items-center justify-center">
          <ChevronRight20Icon size={20} />
        </button>
      </div>
    </div>
  );
};

export default WeekNavigator;
