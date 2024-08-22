'use client';

import { useEffect, useState } from 'react';

import { getProject, Project } from '@/apis/projects/get';
import Alert from '@/components/modal/Alert';

import RightActionSheetContainer from '../Container';
import EditProjectSheet from '../edit-project/EditProjectSheet';
import ProjectDetailItems from './_components/ProjectDetailItems';
import ProjectProgress from './_components/ProjectProgress';
import RelatedReview from './_components/RelatedReview';

interface Props {
  isOpen: boolean;
  closeSheet: () => void;
  projectId: number;
}

const ProjectDetailSheet = ({ isOpen, closeSheet, projectId }: Props) => {
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [openEditSheet, setOpenEditSheet] = useState(false);
  const [projectInfo, setProjectInfo] = useState<Project>();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    getProjectInfo();
  }, [isOpen]);

  const getProjectInfo = async () => {
    const data = await getProject({ id: projectId });
    console.log('data', data);

    setProjectInfo(data);
  };

  if (!isOpen) {
    return null;
  }

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
                {projectInfo.title}
              </p>
              <ProjectProgress
                startDate="2024.6.1"
                endDate="2024.10.31"
                percentage={projectInfo.progress}
              />
              <div className="flex flex-col gap-4 mb-6">
                <ProjectDetailItems title="목표" content={projectInfo.goal} />
                <ProjectDetailItems
                  title="내용"
                  content={projectInfo.content}
                />
              </div>
              <div>
                <p className="mb-5 font-title-16 text-text-strong">
                  연관된 회고
                </p>

                <div className="flex flex-col gap-3">
                  <RelatedReview
                    type="highlight"
                    review="시즌 프로모션 반응이 지난번이벤트보다 2배나 좋았음시즌
            프로모션 반응이 지난번이벤트보다 2배나 좋았음시즌 프로모션
            반응이 지난번이벤트보다 2배나 좋았음시즌 프로모션 반응이 지난번이벤트보다 2배나 좋았음"
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
        closeSheet={() => setOpenEditSheet(false)}
        projectId={projectId}
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
