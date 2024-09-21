'use client';

import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';

import { addProject } from '@/apis/projects/post';
import DateRangeInput from '@/components/inputs/date/DateRangeInput';
import Input from '@/components/inputs/input/Input';
import LineInput from '@/components/inputs/line/LineInput';
import Textarea from '@/components/inputs/textarea/Textarea';
import Alert from '@/components/modal/Alert';
import useToast from '@/hooks/useToast';
import { prefixZeros } from '@/utils/format';

import RightActionSheetContainer from '../Container';

interface Props {
  isOpen: boolean;
  closeSheet: () => void;
}

const CreateProjectSheet = ({ isOpen, closeSheet }: Props) => {
  const { addToast } = useToast();

  const [title, setTitle] = useState('');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [goal, setGoal] = useState('');
  const [description, setDescription] = useState('');

  const [showExitAlert, setShowExitAlert] = useState(false);

  const clearAllInputs = () => {
    setTitle('');
    setDateRange({ start: '', end: '' });
    setGoal('');
    setDescription('');
  };

  const enrollProject = async () => {
    const [startYear, startMonth, startDay] = dateRange.start.split('.');
    const [endYear, endMonth, endDay] = dateRange.end.split('.');

    const body = {
      title,
      startDate: `${startYear}-${prefixZeros(Number(startMonth), 2)}-${prefixZeros(Number(startDay), 2)}`,
      endDate: `${endYear}-${prefixZeros(Number(endMonth), 2)}-${prefixZeros(Number(endDay), 2)}`,
      goal,
      content: description,
    };

    try {
      await addProject(body);
      addToast({
        message: '프로젝트 내용이 저장되었어요.',
        iconType: 'success',
      });
      closeSheet();
      clearAllInputs();
    } catch (error) {
      addToast({
        message: '프로젝트를 저장하는데 실패했어요.',
        iconType: 'error',
      });
    }
  };

  const onCloseSheet = () => {
    if (title || dateRange.start || dateRange.end || goal || description) {
      setShowExitAlert(true);
    } else {
      closeSheet();
    }
  };

  const handleMaxLength = (
    e: ChangeEvent<HTMLInputElement>,
    maxLength: number,
    setter: Dispatch<SetStateAction<string>>,
  ) => {
    if (e.currentTarget.value.length > maxLength) {
      addToast({
        iconType: 'error',
        message: '최대 글자수를 초과했습니다',
      });

      return;
    }

    setter(e.currentTarget.value);
  };

  return (
    <>
      <RightActionSheetContainer
        isOpen={isOpen}
        closeActionSheet={onCloseSheet}
        buttons={[
          {
            text: '저장',
            onClick: enrollProject,
            buttonStyle: 'primary',
          },
        ]}
      >
        <div className="mb-5">
          <LineInput
            placeholder="프로젝트 이름"
            className="!font-bold"
            value={title}
            onChange={(e) => handleMaxLength(e, 73, setTitle)}
            maxLength={74}
            autoFocus
          />
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
              maxLength={51}
              value={goal}
              onChange={(e) => handleMaxLength(e, 50, setGoal)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-body-14 text-text-normal">내용</p>
            <Textarea
              placeholder="내용을 입력해주세요"
              maxLength={501}
              className="h-[9.6875rem]"
              value={description}
              onChange={(val) => {
                if (val.length > 500) {
                  addToast({
                    iconType: 'error',
                    message: '최대 글자수를 초과했습니다',
                  });

                  return;
                }

                setDescription(val);
              }}
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
            onClick: () => {
              closeSheet();
              clearAllInputs();
            },
          },
        }}
      />
    </>
  );
};

export default CreateProjectSheet;
