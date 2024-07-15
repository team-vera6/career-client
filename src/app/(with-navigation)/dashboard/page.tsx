'use client';

import Image from 'next/image';
import { useState } from 'react';

import EmptyMemoImage from '@/assets/images/memo-empty.png';
import EmptyTodoImage from '@/assets/images/todo-empty.png';
import FireIcon from '@/components/icons/FireIcon';
import FlagIcon from '@/components/icons/FlagIcon';
import PlusIcon from '@/components/icons/PlusIcon';
import YellowFolderIcon from '@/components/icons/YellowFolderIcon';

export default function DashboardPage() {
  const [todo, setTodo] = useState({
    text: '',
    checked: false,
  });
  const [todo2, setTodo2] = useState({
    text: '',
    checked: false,
  });
  const [todo3, setTodo3] = useState({
    text: '',
    checked: false,
  });
  const [todo4, setTodo4] = useState({
    text: '',
    checked: false,
  });

  return (
    <div>
      <section className="flex gap-3 w-full mb-7">
        <div className="w-[19.5rem] pl-10 h-20 rounded-xl bg-surface-foregroundOn flex items-center gap-4">
          <FireIcon size={32} />
          <p className="font-body-16 text-text-strong">
            <span className="font-chakra font-semibold italic mr-1">01</span>주 연속 회고
          </p>
        </div>
        <div className="w-[19.5rem] pl-10 h-20 rounded-xl bg-surface-foregroundOn flex items-center gap-4">
          <FlagIcon size={32} />
          <p className="font-body-16 text-text-strong">
            <span className="font-chakra font-semibold italic mr-1">04</span>개 회고 기록
          </p>
        </div>
        <div className="w-[19.5rem] pl-10 h-20 rounded-xl bg-surface-foregroundOn flex items-center gap-4">
          <YellowFolderIcon size={32} />
          <p className="font-body-16 text-text-strong">
            <span className="font-chakra font-semibold italic mr-1">29</span>개 프로젝트
          </p>
        </div>
      </section>

      <div className="w-full">
        <section className="flex items-center justify-between mb-6">
          <p className="font-head-20 text-text-strong">6월 4주차</p>

          <button className="button-primary button-large">회고하기</button>
        </section>

        <div className="flex gap-9">
          {/* 이번 주 할 일 */}
          <section className="w-full">
            <div className="flex items-center justify-between w-full">
              <p className="font-title-16 text-text-strong">이번 주 할 일</p>
              <button className="button-line button-small">
                <PlusIcon size={20} />
                <p className="font-body-13 text-text-strong">추가</p>
              </button>
            </div>

            {/* <div className="flex flex-col gap-3 mt-4">
              <CheckboxInput
                value={todo.text}
                checked={todo.checked}
                onChange={(value) => setTodo((prev) => ({ ...prev, text: value }))}
                onClickCheckbox={() => setTodo((prev) => ({ ...prev, checked: !prev.checked }))}
                showButtonsOnHover
                buttons={
                  <button>
                    <DeleteIcon size={20} />
                  </button>
                }
              />
              <CheckboxInput
                value={todo2.text}
                checked={todo2.checked}
                onChange={(value) => setTodo2((prev) => ({ ...prev, text: value }))}
                onClickCheckbox={() => setTodo2((prev) => ({ ...prev, checked: !prev.checked }))}
                showButtonsOnHover
                buttons={
                  <button>
                    <DeleteIcon size={20} />
                  </button>
                }
              />
              <CheckboxInput
                value={todo3.text}
                checked={todo3.checked}
                onChange={(value) => setTodo3((prev) => ({ ...prev, text: value }))}
                onClickCheckbox={() => setTodo3((prev) => ({ ...prev, checked: !prev.checked }))}
                showButtonsOnHover
                buttons={
                  <button>
                    <DeleteIcon size={20} />
                  </button>
                }
              />
              <CheckboxInput
                value={todo4.text}
                checked={todo4.checked}
                onChange={(value) => setTodo4((prev) => ({ ...prev, text: value }))}
                onClickCheckbox={() => setTodo4((prev) => ({ ...prev, checked: !prev.checked }))}
                showButtonsOnHover
                disabled
                buttons={
                  <button>
                    <DeleteIcon size={20} />
                  </button>
                }
              />
            </div> */}

            <div className="w-full flex items-center flex-col gap-5 mt-[3.75rem]">
              <p className="font-body-16 text-text-normal">작성한 할 일이 없어요</p>
              <Image src={EmptyTodoImage} width={100} height={100} alt="no memo" />
            </div>
          </section>

          {/* 이번 주 메모 */}
          <section className="shrink-0 min-w-[252px]">
            <div className="flex items-center justify-between w-full">
              <p className="font-title-16 text-text-strong">이번 주 메모</p>
              <button className="button-line button-small">
                <PlusIcon size={20} />
                <p className="font-body-13 text-text-strong">추가</p>
              </button>
            </div>

            {/* <div className="flex flex-col gap-3 mt-4">
              <Memo title="로열티 기획" memo="회원 등급, 포인트 시스템" date="7.12" />
              <Memo title="로열티 기획" memo="회원 등급, 포인트 시스템" date="7.12" />
              <Memo title="로열티 기획" memo="회원 등급, 포인트 시스템" date="7.12" />
              <Memo title="로열티 기획" memo="회원 등급, 포인트 시스템" date="7.12" />
              <Memo title="로열티 기획" memo="회원 등급, 포인트 시스템" date="7.12" />
              <Memo title="로열티 기획" memo="회원 등급, 포인트 시스템" date="7.12" />
              <Memo title="로열티 기획" memo="회원 등급, 포인트 시스템" date="7.12" />
              <Memo title="로열티 기획" memo="회원 등급, 포인트 시스템" date="7.12" />
              <Memo title="로열티 기획" memo="회원 등급, 포인트 시스템" date="7.12" />
              <Memo title="로열티 기획" memo="회원 등급, 포인트 시스템" date="7.12" />
            </div> */}
            <div className="w-[15.75rem] flex items-center flex-col gap-5 mt-[3.75rem]">
              <p className="font-body-16 text-text-normal">남긴 메모가 없어요</p>
              <Image src={EmptyMemoImage} width={100} height={100} alt="no memo" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
