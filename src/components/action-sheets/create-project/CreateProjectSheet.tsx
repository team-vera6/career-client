'use client';

import { useState } from 'react';

import DateRangeInput from '@/components/inputs/date/DateRangeInput';
import Input from '@/components/inputs/input/Input';
import LineInput from '@/components/inputs/line/LineInput';
import Textarea from '@/components/inputs/textarea/Textarea';

import RightActionSheetContainer from '../Container';

interface Props {
  isOpen: boolean;
  closeSheet: () => void;
  initialDate?: { start: string; end: string };
  initialGoal?: string;
  initialDescription?: string;
}

const CreateProjectSheet = ({
  isOpen,
  closeSheet,
  initialDate,
  initialGoal,
  initialDescription,
}: Props) => {
  const [dateRange, setDateRange] = useState(
    initialDate ?? { start: '', end: '' },
  );
  const [goal, setGoal] = useState(initialGoal ?? '');
  const [description, setDescription] = useState(initialDescription ?? '');

  return (
    <RightActionSheetContainer
      isOpen={isOpen}
      closeActionSheet={closeSheet}
      buttons={[
        {
          text: '저장',
          onClick: () => {
            console.log('저장');
          },
          buttonStyle: 'primary',
        },
      ]}
    >
      <div className="mb-5">
        <LineInput placeholder="프로젝트 이름" />
      </div>

      <div className="flex flex-col gap-3">
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
    </RightActionSheetContainer>
  );
};

export default CreateProjectSheet;
