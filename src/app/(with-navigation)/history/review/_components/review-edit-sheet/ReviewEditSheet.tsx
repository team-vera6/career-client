import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { editHighlight } from '@/apis/review/put';
import Score from '@/app/(with-navigation)/history/_components/review/Score';
import { ReviewEdit } from '@/app/(with-navigation)/history/review/_components/review-edit-sheet/ReviewEdit';
import RightActionSheetContainer from '@/components/action-sheets/Container';
import useToast from '@/hooks/useToast';
import { CurrentWeek } from '@/types/currentWeek';
import { Highlight } from '@/types/highlight';
import { Todo } from '@/types/todo';

interface Props {
  isOpen: boolean;
  selectedReviewId: number;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  weekNumber: CurrentWeek;
  highlights: Omit<Highlight, 'currentWeek'>[];
  lowlights: Omit<Highlight, 'currentWeek'>[];
  completedTodos: Todo[];
  fetchList: () => Promise<void>;
}

export const ReviewEditSheet = ({
  isOpen,
  setIsOpen,
  weekNumber,
  highlights,
  lowlights,
  completedTodos,
  fetchList,
}: Props) => {
  const { addToast } = useToast();

  const [deletableHighlightIds, setDeletableHighlightIds] = useState<number[]>(
    [],
  );
  const [deletableLowlightIds, setDeletableLowlightIds] = useState<number[]>(
    [],
  );

  const [highlightsForDisplay, setHighlightsForDisplay] = useState<Highlight[]>(
    [],
  );
  const [lowlightsForDisplay, setLowlightsForDisplay] = useState<Highlight[]>(
    [],
  );

  useEffect(() => {
    setHighlightsForDisplay(highlights);
    setLowlightsForDisplay(lowlights);
  }, [highlights, lowlights]);

  const onClickDeleteProject = (id: number, type: 'highlight' | 'lowlight') => {
    if (type === 'highlight') {
      setDeletableHighlightIds([...deletableHighlightIds, id]);

      setHighlightsForDisplay(
        highlightsForDisplay.map((highlight) =>
          highlight.id === id
            ? { ...highlight, project: { id: 0, content: '', progressRate: 0 } }
            : highlight,
        ),
      );
    }

    if (type === 'lowlight') {
      setDeletableLowlightIds([...deletableLowlightIds, id]);

      setLowlightsForDisplay(
        lowlightsForDisplay.map((lowlight) =>
          lowlight.id === id
            ? { ...lowlight, project: { id: 0, content: '', progressRate: 0 } }
            : lowlight,
        ),
      );
    }
  };

  const saveDeletedProjects = async () => {
    try {
      deletableHighlightIds.forEach(async (id) => {
        const currentContent =
          highlights.find((highlight) => highlight.id === id)?.content ?? '';

        await editHighlight(id, { content: currentContent, projectId: null });
      });

      deletableLowlightIds.forEach(async (id) => {
        const currentContent =
          lowlights.find((lowlight) => lowlight.id === id)?.content ?? '';

        await editHighlight(id, { content: currentContent, projectId: null });
      });
    } catch (error) {
      console.error('fail to delete projects', error);
    }
  };

  return (
    <RightActionSheetContainer
      disableAnimation
      isOpen={isOpen}
      closeActionSheet={() => {
        setIsOpen(false);
        setHighlightsForDisplay(highlights);
        setLowlightsForDisplay(lowlights);
        setDeletableHighlightIds([]);
        setDeletableLowlightIds([]);
      }}
      buttons={[
        {
          text: '저장',
          buttonStyle: 'primary',
          onClick: async () => {
            await saveDeletedProjects();
            setIsOpen(false);
            addToast({
              iconType: 'success',
              message: '프로젝트 내용이 수정되었어요.',
            });
          },
        },
      ]}
    >
      <section className="flex flex-col">
        <div className="flex items-center justify-between mb-5.5">
          <p className="font-head-28 text-text-strong">
            {weekNumber.month}월 {weekNumber.week}주차
          </p>

          <div className="flex items-center gap-2">
            <p className="font-body-14 text-text-strong">만족도</p>
            <Score activeCount={5} className="bg-surface-foregroundOn" />
          </div>
        </div>

        <ReviewEdit
          highlights={highlightsForDisplay}
          lowlights={lowlightsForDisplay}
          completedTodos={completedTodos}
          fetchList={fetchList}
          onClickDeleteProject={onClickDeleteProject}
        />
      </section>
    </RightActionSheetContainer>
  );
};
