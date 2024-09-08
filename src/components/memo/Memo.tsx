'use client';

import { useState } from 'react';

import { editMemo } from '@/apis/memo/put';
import { MemoItem } from '@/app/review/types';
import { cn } from '@/utils/tailwind';

import TextEditorModal from '../modal/text-editor';
import MemoBottom from './MemoBottom';

const Memo = ({
  isBookmark = false,
  title,
  memo,
  date,
  id,
  className,
}: MemoItem) => {
  const [showMemo, setShowMemo] = useState(false);
  const [textValue, setTextValue] = useState(memo ?? '');

  const onClickCloseModal = () => {
    setShowMemo(false);
  };

  const updateMemo = async (inputText: string) => {
    try {
      await editMemo({
        id: Number(id),
        content: inputText,
        isMarked: isBookmark,
      });
    } catch (error) {
      console.error('fail to update memo', error);
    }
  };

  return (
    <>
      <div
        className={cn(
          'w-[15.75rem] h-[8.75rem] rounded-lg pt-5 pr-4 pb-2.5 pl-5 flex flex-col gap-2.5 bg-surface-foreground',
          className,
        )}
        style={{
          boxShadow: '0px 8px 20px 0px #00000014, 0px 0px 2px 0px #0000000D',
        }}
        onClick={() => {
          setShowMemo(true);
        }}
      >
        <div className="w-full h-full pr-1 break-keep overflow-hidden whitespace-pre-wrap line-clamp-4">
          {!!title && <p className="font-title-14 text-text-strong">{title}</p>}
          {!!memo && (
            <p
              className="font-body-14 text-text-strong"
              dangerouslySetInnerHTML={{ __html: textValue }}
            />
          )}
        </div>

        <MemoBottom id={id} isBookmark={isBookmark} date={date} />
      </div>

      <TextEditorModal
        isOpen={showMemo}
        onDismiss={onClickCloseModal}
        onSaveText={async (val) => {
          await updateMemo(val);
          setTextValue(val);
        }}
        value={textValue}
      />
    </>
  );
};

export default Memo;
