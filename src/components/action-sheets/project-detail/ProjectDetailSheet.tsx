'use client';

import { useCallback, useEffect, useState } from 'react';

import { getProject, ProjectListResponse } from '@/apis/projects/get';
import Alert from '@/components/modal/Alert';
import { Highlight } from '@/types/highlight';
import { sortByWeek } from '@/types/sort';

import RightActionSheetContainer from '../Container';
import EditProjectSheet from '../edit-project/EditProjectSheet';
import ProjectDetailItems from './_components/ProjectDetailItems';
import ProjectProgress from './_components/ProjectProgress';
import RelatedReview from './_components/RelatedReview';

export interface Review extends Highlight {
  type: 'highlight' | 'lowlight';
}

interface Props {
  isOpen: boolean;
  closeSheet: () => void;
  projectId: number;
}

const ProjectDetailSheet = ({ isOpen, closeSheet, projectId }: Props) => {
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [openEditSheet, setOpenEditSheet] = useState(false);
  const [projectInfo, setProjectInfo] = useState<ProjectListResponse>();
  const [reviews, setReviews] = useState<Review[]>([]);

  const getProjectInfo = useCallback(async () => {
    const data = await getProject(projectId);
    setProjectInfo(data);

    const reviews = sortHighlightsAndLowlights(
      data.projects[0].highlights,
      data.projects[0].lowlights,
    );
    setReviews(reviews);
  }, [projectId]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    getProjectInfo();
  }, [isOpen, getProjectInfo]);

  const sortHighlightsAndLowlights = (
    highlights: Highlight[],
    lowlights: Highlight[],
  ) => {
    const reviews = [
      ...highlights.map((highlight) => ({ ...highlight, type: 'highlight' })),
      ...lowlights.map((lowlight) => ({ ...lowlight, type: 'lowlight' })),
    ];

    reviews.sort(sortByWeek);

    return reviews as Review[];
  };

  return (
    <>
      <RightActionSheetContainer
        isOpen={isOpen}
        closeActionSheet={closeSheet}
        buttons={[
          {
            text: '삭제',
            buttonStyle: 'line',
            onClick: () => setShowDeleteAlert(true),
          },
          {
            text: '수정',
            buttonStyle: 'line',
            onClick: () => setOpenEditSheet(true),
          },
        ]}
      >
        <>
          {projectInfo ? (
            <>
              <p className="font-head-24 text-text-strong mb-4">
                {projectInfo.projects[0].title}
              </p>

              <ProjectProgress
                startDate={projectInfo.projects[0].startDate}
                endDate={projectInfo.projects[0].endDate}
                percentage={projectInfo.projects[0].progress}
              />

              <div className="flex flex-col gap-4 mb-6">
                <ProjectDetailItems
                  title="목표"
                  content={projectInfo.projects[0].goal}
                />
                <ProjectDetailItems
                  title="내용"
                  content={projectInfo.projects[0].title}
                />
              </div>

              <div>
                <p className="mb-5 font-title-16 text-text-strong">
                  연관된 회고
                </p>

                <div className="flex flex-col gap-3">
                  {reviews.map((review) => (
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
            </>
          ) : (
            <SheetLoading />
          )}
        </>
      </RightActionSheetContainer>

      <Alert
        isOpen={showDeleteAlert}
        title="정말로 삭제하시겠어요?"
        onDismiss={() => setShowDeleteAlert(false)}
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

      <EditProjectSheet
        isOpen={openEditSheet}
        closeSheet={async () => {
          setOpenEditSheet(false);
          await getProjectInfo();
        }}
        projectId={projectId}
        initialTitle={projectInfo?.projects[0].title}
        initialDate={{
          start: projectInfo?.projects[0].startDate ?? '',
          end: projectInfo?.projects[0].endDate ?? '',
        }}
        initialGoal={projectInfo?.projects[0].goal}
        initialDescription={projectInfo?.projects[0].title}
        reviews={reviews}
      />
    </>
  );
};

export default ProjectDetailSheet;

const SheetLoading = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <p className="font-body-16 text-text-weak">로딩중...</p>
    </div>
  );
};
