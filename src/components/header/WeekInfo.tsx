import { cn } from '@/utils/tailwind';

interface Props {
  totalWeek: number;
  currentWeek: number;
}

const WeekInfo = ({ totalWeek, currentWeek }: Props) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: totalWeek }, (_, i) => (
        <WeekItem key={i} currentWeek={i + 1} active={currentWeek === i + 1} />
      ))}
    </div>
  );
};

export default WeekInfo;

interface WeekItemProps extends Pick<Props, 'currentWeek'> {
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
