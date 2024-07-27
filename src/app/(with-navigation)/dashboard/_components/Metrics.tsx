import FireIcon from '@/components/icons/FireIcon';
import FlagIcon from '@/components/icons/FlagIcon';
import YellowFolderIcon from '@/components/icons/YellowFolderIcon';
import { prefixZeros } from '@/utils/format';

interface Props {
  weekStreak: number;
  reviewCount: number;
  projectCount: number;
}

const Metrics = ({ weekStreak, reviewCount, projectCount }: Props) => {
  return (
    <section className="flex gap-3 w-full mb-7">
      <div className="w-[19.5rem] pl-10 h-20 rounded-xl bg-surface-foregroundOn flex items-center gap-4">
        <FireIcon size={32} />
        <p className="font-body-16 text-text-strong">
          <span className="font-chakra font-semibold italic mr-1">
            {prefixZeros(weekStreak, 2)}
          </span>
          주 연속 회고
        </p>
      </div>
      <div className="w-[19.5rem] pl-10 h-20 rounded-xl bg-surface-foregroundOn flex items-center gap-4">
        <FlagIcon size={32} />
        <p className="font-body-16 text-text-strong">
          <span className="font-chakra font-semibold italic mr-1">
            {prefixZeros(reviewCount, 2)}
          </span>
          개 회고 기록
        </p>
      </div>
      <div className="w-[19.5rem] pl-10 h-20 rounded-xl bg-surface-foregroundOn flex items-center gap-4">
        <YellowFolderIcon size={32} />
        <p className="font-body-16 text-text-strong">
          <span className="font-chakra font-semibold italic mr-1">
            {prefixZeros(projectCount, 2)}
          </span>
          개 프로젝트
        </p>
      </div>
    </section>
  );
};

export default Metrics;
