'use client';

import { useState } from 'react';

import DateRangeInput from '@/components/inputs/date/DateRangeInput';
import Input from '@/components/inputs/input/Input';
import LineInput from '@/components/inputs/line/LineInput';
import Textarea from '@/components/inputs/textarea/Textarea';
import Alert from '@/components/modal/Alert';
import useToast from '@/hooks/useToast';

import RightActionSheetContainer from '../Container';

interface Props {
  isOpen: boolean;
  closeSheet: () => void;
}

const CreateProjectSheet = ({ isOpen, closeSheet }: Props) => {
  const { addToast } = useToast();

  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [goal, setGoal] = useState('');
  const [description, setDescription] = useState('');

  const [showExitAlert, setShowExitAlert] = useState(false);

  return (
    <>
      <RightActionSheetContainer
        isOpen={isOpen}
        closeActionSheet={() => {
          if (dateRange.start || goal || description) {
            setShowExitAlert(true);
          } else {
            closeSheet();
          }
        }}
        buttons={[
          {
            text: '저장',
            onClick: () => {
              closeSheet();
              addToast({
                message: '프로젝트 내용이 저장되었어요.',
                iconType: 'success',
              });
            },
            buttonStyle: 'primary',
          },
        ]}
      >
        <div className="mb-5">
          <LineInput placeholder="프로젝트 이름" className="!font-bold" />
        </div>

        <div className="flex flex-col gap-4">
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

      <Alert
        isOpen={showExitAlert}
        onDismiss={() => setShowExitAlert(false)}
        title="저장하지 않고 나가시겠어요?"
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
    </>
  );
};

export default CreateProjectSheet;
