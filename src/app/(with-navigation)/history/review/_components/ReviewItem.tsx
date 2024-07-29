import ProgressDots from '@/components/progress-dots/ProgressDots';

interface Props {
  week: number;
  content: string;
  activeCount: number;
}

const ReviewItem = ({ week, content, activeCount }: Props) => {
  return (
    <div className="w-full h-14 flex items-center pl-6 pr-5 bg-surface-foregroundOn rounded-2xl cursor-pointer">
      <p className="w-12 mr-3 font-body-16 text-text-normal text-left">
        {week}주차
      </p>
      <p className="flex-1 font-title-16 text-text-strong truncate mr-4">
        {content}
      </p>
      <div className="px-3 py-2 rounded-[0.875rem] bg-surface-foreground">
        <ProgressDots
          totalCount={7}
          activeCount={activeCount}
          displayType="progress"
          className="gap-2"
        />
      </div>
    </div>
  );
};

export default ReviewItem;
