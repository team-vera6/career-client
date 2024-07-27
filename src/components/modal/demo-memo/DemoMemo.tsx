'use client';

import { useSetAtom } from 'jotai';
import { useState } from 'react';

import { memoListAtom } from '@/app/review/stores';
import { MemoItem } from '@/app/review/types';
import Input from '@/components/inputs/input/Input';
import Textarea from '@/components/inputs/textarea/Textarea';

import Alert from '../Alert';
import Modal from '../Modal';
import { ModalProps } from '../ModalContainer';

export interface DemoMemoProps extends ModalProps, MemoItem {}

const DemoMemo = (props: DemoMemoProps) => {
  const setMemoList = useSetAtom(memoListAtom);
  const [title, setTitle] = useState(props.title);
  const [memo, setMemo] = useState(props.memo);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  const onChangeMemo = ({
    type,
    val,
  }: {
    type: 'title' | 'memo';
    val: string;
  }) => {
    type === 'title' ? setTitle(val) : setMemo(val);
  };

  const onSubmit = () => {
    setMemoList((prev) =>
      prev.map((item) =>
        item.id === props.id
          ? {
              ...item,
              title: title,
              memo: memo,
            }
          : item,
      ),
    );
    props.onDismiss?.();
  };

  const onClickDelete = () => {
    setMemoList((prev) => prev.filter((item) => props.id !== item.id));
  };

  return (
    <>
      <Modal closeIcon {...props} title="7월 4주차 메모">
        <div className="flex flex-col gap-5 px-6 pb-6 w-[29rem]">
          <div className="flex flex-col gap-2 w-full">
            <p className="font-title-16">제목</p>
            <Input
              value={title}
              onChange={(e) =>
                onChangeMemo({ type: 'title', val: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <p className="font-title-16">내용</p>
            <Textarea
              value={memo}
              className="h-[10rem]"
              onChange={(val) => onChangeMemo({ type: 'memo', val: val })}
            />
          </div>
          <div className="flex self-end mt-2 gap-2">
            <button
              type="submit"
              className="button-secondary button-medium"
              onClick={() => setShowDeleteAlert(true)}
            >
              삭제
            </button>
            <button
              type="submit"
              className="button-primary button-medium"
              onClick={onSubmit}
            >
              저장
            </button>
          </div>
        </div>
      </Modal>
      <Alert
        isOpen={showDeleteAlert}
        onDismiss={() => setShowDeleteAlert(false)}
        title="정말로 삭제하시겠어요?"
        buttons={{
          left: {
            text: '취소',
            className:
              'button-secondary button-medium font-body-14 text-text-strong',
          },
          right: {
            text: '확인',
            className:
              'button-primary button-medium font-body-14 text-text-invert',
            onClick: onClickDelete,
          },
        }}
      />
    </>
  );
};

export default DemoMemo;
