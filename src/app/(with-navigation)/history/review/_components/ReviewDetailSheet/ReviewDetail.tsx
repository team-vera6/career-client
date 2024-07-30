import { LastReviewItem } from '@/app/review/_components/last-review/LastReviewItem';
import HighlightCircleIcon from '@/components/icons/HighlightCircleIcon';
import LowlightCircleIcon from '@/components/icons/LowlightCircleIcon';
import CheckboxInput from '@/components/inputs/checkbox/CheckboxInput';

const dummy = {
  id: 'dummy-1',
  text: '시즌 프로모션 반응이 지난번이벤트보다 2배나 좋았음시즌 프로모션 반응이 지난번이벤트보다 2배나 좋았음시즌 프로모션 반응이 지난번이벤트보다 2배나 좋았음',
  project:
    '차량의 상태(연료, 배터리, 타이어 등)를 실시간으로 모니터링 시스템 모니터링 시스템',
  progressCount: 44,
};

export const ReviewDetail = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2.5">
        <p className="font-title-14 text-text-strong flex items-center gap-2">
          <HighlightCircleIcon size={24} />
          하이라이트
        </p>
        <div className="pl-8">
          <LastReviewItem {...dummy} />
        </div>
      </div>
      <div className="flex flex-col gap-2.5">
        <p className="font-title-14 text-text-strong flex items-center gap-2">
          <LowlightCircleIcon size={24} />
          로우라이트
        </p>
        <div className="pl-8">
          <LastReviewItem {...dummy} />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-title-14 text-text-strong">완료한 일</p>
        <div className="pl-8">
          <CheckboxInput value="ㅇㅇㅇ" checked />
        </div>
      </div>
    </div>
  );
};
