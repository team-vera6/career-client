'use client';

import Image from 'next/image';
import { useState } from 'react';

import EmptyMemoImage from '@/assets/images/memo-empty.png';
import PlusIcon from '@/components/icons/PlusIcon';
import Memo from '@/components/memo/Memo';
import TextEditorModal from '@/components/modal/text-editor';

const MemoList = () => {
  const [openTextEditor, setOpenTextEditor] = useState(false);
  const [memos, setMemos] =
    useState<{ title: string; memo: string; date: string }[]>(dummy);

  return (
    <section className="shrink-0 min-w-[252px]">
      <div className="flex items-center justify-between w-full">
        <p className="font-title-16 text-text-strong">이번 주 메모</p>
        <button
          className="button-line button-small h-8"
          onClick={() => setOpenTextEditor(true)}
        >
          <PlusIcon size={20} />
          <p className="font-body-13 text-text-strong">추가</p>
        </button>
      </div>

      {memos.length > 0 ? (
        <div className="flex flex-col gap-3 mt-4">
          {memos.map((memo, index) => (
            <Memo
              id={String(index)}
              key={index}
              title={memo.title}
              memo={memo.memo}
              date={memo.date}
            />
          ))}
        </div>
      ) : (
        <div className="w-[15.75rem] flex items-center flex-col gap-5 mt-[3.75rem]">
          <p className="font-body-16 text-text-normal">남긴 메모가 없어요</p>
          <Image src={EmptyMemoImage} width={100} height={100} alt="no memo" />
        </div>
      )}

      <TextEditorModal
        isOpen={openTextEditor}
        onDismiss={() => {
          setOpenTextEditor(false);
        }}
        onSaveText={(text) => {
          setMemos((prev) => [
            ...prev,
            { title: '', memo: text, date: new Date().toLocaleDateString() },
          ]);
        }}
      />
    </section>
  );
};

export default MemoList;

const dummy: { title: string; memo: string; date: string }[] = [
  {
    title: '로열티 기획',
    memo: '회원 등급, 포인트 시스템',
    date: '7.12',
  },
  {
    title: '제휴 브랜드 전용 새로운 테마, 템플릿 레퍼런스 찾기',
    memo: '',
    date: '7.12',
  },
  {
    title: '주간회의',
    memo: '- 신규입사자 안내\n- 진행건 요약정리\n- 마케팅 팀 신규 캠페인 관련 공유',
    date: '7.12',
  },
  {
    title: '',
    memo: '개발팀에 서버 로그 재분석 요청 -> 롤백 계획 준비',
    date: '7.12',
  },
];
