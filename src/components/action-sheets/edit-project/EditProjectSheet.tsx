'use client';

import { useState } from 'react';

import DateRangeInput from '@/components/inputs/date/DateRangeInput';
import Input from '@/components/inputs/input/Input';
import LineInput from '@/components/inputs/line/LineInput';
import Textarea from '@/components/inputs/textarea/Textarea';
import Alert from '@/components/modal/Alert';
import useToast from '@/hooks/useToast';

import RightActionSheetContainer from '../Container';
import RelatedReview from '../project-detail/_components/RelatedReview';

interface Props {
  isOpen: boolean;
  closeSheet: () => void;
  projectId: number;
  initialTitle?: string;
  initialDate?: { start: string; end: string };
  initialGoal?: string;
  initialDescription?: string;
}

const EditProjectSheet = ({
  isOpen,
  closeSheet,
  projectId,
  initialTitle,
  initialDate,
  initialGoal,
  initialDescription,
}: Props) => {
  const { addToast } = useToast();

  const [title, setTitle] = useState(initialTitle ?? '');
  const [dateRange, setDateRange] = useState(
    initialDate ?? { start: '', end: '' },
  );
  const [goal, setGoal] = useState(initialGoal ?? '');
  const [description, setDescription] = useState(initialDescription ?? '');

  const [showDismissAlert, setShowDismissAlert] = useState(false);

  return (
    <RightActionSheetContainer
      isOpen={isOpen}
      closeActionSheet={() => setShowDismissAlert(true)}
      buttons={[
        {
          text: '저장',
          onClick: () => {
            closeSheet();
            addToast({
              message: '프로젝트 내용이 수정되었어요.',
              iconType: 'success',
            });
          },
        },
      ]}
    >
      <LineInput
        placeholder="프로젝트 이름"
        className="!font-bold"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
        id={String(projectId)}
      />

      <div className="flex flex-col gap-4 mb-6 mt-3">
        <div className="flex flex-col gap-1">
          <p className="font-body-14 text-text-normal">기간</p>
          <DateRangeInput date={dateRange} setDate={setDateRange} />
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-body-14 text-text-normal">목표</p>
          <Input
            placeholder="목표를 입력해주세요"
            maxLength={50}
            value={goal}
            onChange={(e) => setGoal(e.currentTarget.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-body-14 text-text-normal">내용</p>
          <Textarea
            placeholder="내용을 입력해주세요"
            maxLength={160}
            className="h-[9.6875rem]"
            value={description}
            onChange={(val) => setDescription(val)}
          />
        </div>
      </div>

      <div>
        <p className="mb-5 font-title-16 text-text-strong">연관된 회고</p>

        <div className="flex flex-col gap-3">
          <RelatedReview
            type="highlight"
            review="시즌 프로모션 반응이 지난번이벤트보다 2배나 좋았음시즌
                프로모션 반응이 지난번이벤트보다 2배나 좋았음시즌 프로모션
                반응이 지난번이벤트보다 2배나 좋았음"
            week="6월 1주차"
          />
          <RelatedReview
            type="lowlight"
            review="QA를 1달가까이 하는중이라 지쳐가는중"
            week="5월 4주차"
          />
          <RelatedReview
            type="lowlight"
            review="QA를 1달가까이 하는중이라 지쳐가는중"
            week="5월 3주차"
            last
          />
        </div>
      </div>

      <Alert
        isOpen={showDismissAlert}
        onDismiss={() => setShowDismissAlert(false)}
        title="변경사항을 저장하지 않고 나가시겠어요?"
        buttons={{
          left: {
            text: '취소',
          },
          right: {
            text: '확인',
            onClick: closeSheet,
          },
        }}
      />
    </RightActionSheetContainer>
  );
};

export default EditProjectSheet;
