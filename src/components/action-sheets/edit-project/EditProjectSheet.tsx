'use client';

import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { editProject } from '@/apis/projects/put';
import DateRangeInput from '@/components/inputs/date/DateRangeInput';
import Input from '@/components/inputs/input/Input';
import LineInput from '@/components/inputs/line/LineInput';
import Textarea from '@/components/inputs/textarea/Textarea';
import Alert from '@/components/modal/Alert';
import useToast from '@/hooks/useToast';
import { formatToServerDate, getDateForDatePicker } from '@/utils/date';

import RightActionSheetContainer from '../Container';
import RelatedReview from '../project-detail/_components/RelatedReview';
import { Review } from '../project-detail/ProjectDetailSheet';

interface Props {
  isOpen: boolean;
  closeSheet: () => void;
  projectId: number;
  initialTitle?: string;
  initialDate?: { start: string; end: string };
  initialGoal?: string;
  initialDescription?: string;
  reviews?: Review[];
}

const EditProjectSheet = ({
  isOpen,
  closeSheet,
  projectId,
  initialTitle,
  initialDate,
  initialGoal,
  initialDescription,
  reviews,
}: Props) => {
  const { addToast } = useToast();

  const [title, setTitle] = useState('');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [goal, setGoal] = useState('');
  const [description, setDescription] = useState('');

  const [showDismissAlert, setShowDismissAlert] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    setTitle(initialTitle ?? '');
    setDateRange(
      initialDate
        ? {
            start: getDateForDatePicker(initialDate.start),
            end: getDateForDatePicker(initialDate.end),
          }
        : { start: '', end: '' },
    );
    setGoal(initialGoal ?? '');
    setDescription(initialDescription ?? '');
    setGoal(initialGoal ?? '');
  }, [isOpen, initialTitle, initialDate, initialGoal, initialDescription]);

  const hasChanges = useMemo(() => {
    return (
      title !== initialTitle ||
      dateRange.start !== initialDate?.start ||
      dateRange.end !== initialDate?.end ||
      goal !== initialGoal ||
      description !== initialDescription
    );
  }, [
    title,
    dateRange,
    description,
    goal,
    initialTitle,
    initialDate,
    initialDescription,
    initialGoal,
  ]);

  const onClickSave = async () => {
    const body = {
      title,
      startDate: formatToServerDate(dateRange.start),
      endDate: formatToServerDate(dateRange.end),
      goal,
      content: description,
    };

    try {
      await editProject(projectId, body);
      addToast({
        message: '프로젝트 내용이 수정되었어요.',
        iconType: 'success',
      });
      closeSheet();
    } catch (error) {
      addToast({
        message: '프로젝트 수정에 실패했어요. 다시 시도해주세요.',
        iconType: 'error',
      });
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
    <RightActionSheetContainer
      disableAnimation
      disableDimmer
      isOpen={isOpen}
      closeActionSheet={() =>
        hasChanges ? setShowDismissAlert(true) : closeSheet()
      }
      buttons={[
        {
          text: '저장',
          onClick: onClickSave,
        },
      ]}
    >
      <LineInput
        placeholder="프로젝트 이름"
        className="!font-bold"
        value={title}
        onChange={(e) => handleMaxLength(e, 73, setTitle)}
        id={String(projectId)}
        autoFocus
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
            onChange={(e) => handleMaxLength(e, 50, setGoal)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-body-14 text-text-normal">내용</p>
          <Textarea
            placeholder="내용을 입력해주세요"
            maxLength={160}
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

      <div>
        <p className="mb-5 font-title-16 text-text-strong">연관된 회고</p>

        <div className="flex flex-col gap-3">
          {reviews?.map((review) => (
            <RelatedReview
              key={`${review.type}-${review.id}`}
              type={review.type}
              review={review.content}
              week={review.weekNumber}
              last={review === reviews[reviews.length - 1]}
            />
          ))}
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
