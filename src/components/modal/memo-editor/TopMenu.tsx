import { useSetAtom } from 'jotai';
import { useState } from 'react';

import { deleteMemo } from '@/apis/memo/delete';
import { memoListAtom } from '@/app/review/stores';
import CloseIcon from '@/components/icons/CloseIcon';

import Alert from '../Alert';

interface Props {
  id?: number;
  readonly: boolean;
  lastUpdated?: string;
  onDismiss?: () => void;
  onSaveText?: () => void;
}

const TopMenu = ({
  id,
  readonly,
  lastUpdated,
  onDismiss,
  onSaveText,
}: Props) => {
  const setMemoList = useSetAtom(memoListAtom);

  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  const onClickDelete = async () => {
    if (lastUpdated) {
      try {
        await deleteMemo(Number(id));
        setMemoList((prev) => prev.filter((memo) => memo.id !== String(id)));
        onDismiss?.();
      } catch (error) {
        console.error('fail to delete memo', error);
      }
    } else {
      onDismiss?.();
    }
  };

  return (
    <div className="border-b border-b-line-assistive flex items-center justify-between px-6 py-[1.125rem]">
      <button type="button" onClick={onDismiss}>
        <CloseIcon size={20} />
      </button>

      {readonly ? (
        <p className="font-body-14 text-text-neutral">
          회고 중에는 메모 확인만 가능해요.
        </p>
      ) : (
        <div className="flex gap-2">
          <button
            className="button-small button-secondary"
            type="button"
            onClick={() => setShowDeleteAlert(true)}
          >
            삭제
          </button>
          <button
            className="button-small button-primary"
            type="button"
            onClick={() => {
              onSaveText?.();
              onDismiss?.();
            }}
          >
            저장
          </button>
        </div>
      )}

      <Alert
        isOpen={showDeleteAlert}
        onDismiss={() => setShowDeleteAlert(false)}
        title="정말로 삭제하시겠어요?"
        buttons={{
          left: { text: '취소' },
          right: { text: '확인', onClick: onClickDelete },
        }}
      />
    </div>
  );
};

export default TopMenu;
