'use client';

import { useState } from 'react';

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
        <p className="font-head-24 text-text-strong mb-4">
          사용자가 선호하는 차종, 시간대 등을 기반으로 예약을 추천 기능
          추가가용성 정보를 제공하여 예약율 높이기실시 사용자가 선호하는 차량
        </p>

        <ProjectProgress
          startDate="2024.6.1"
          endDate="2024.10.31"
          percentage={66}
        />

        <div className="flex flex-col gap-4 mb-6">
          <ProjectDetailItems
            title="목표"
            content="현재 위치와 선택한 시간대에 맞는 실시간 차량 가용성 정보를 제공"
          />
          <ProjectDetailItems
            title="내용"
            content="현재 위치와 선택한 시간대에 맞는 실시간 차량 가용성 정보를
              제공현재 위치와 선택한 시간대에 맞는 실시간 차량 가용성 정보를
              제공현재 위치와 선택한 시간대에 맞는 실시간 차량 가용성 정보를
              제공현재 위치와 선택한 시간대에 맞는 실시간 차량 가용성 정보를
              제공"
          />
        </div>

        <div>
          <p className="mb-5 font-title-16 text-text-strong">연관된 회고</p>

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
      </RightActionSheetContainer>

      <EditProjectSheet
        isOpen={openEditSheet}
        closeSheet={() => setOpenEditSheet(false)}
        projectId={projectId}
      />
    </>
  );
};

export default ProjectDetailSheet;
