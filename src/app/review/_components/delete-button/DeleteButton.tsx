import { useState } from 'react';

import DeleteIcon from '@/components/icons/DeleteIcon';
import Alert from '@/components/modal/Alert';

import { ReviewType } from '../../types';

interface Props {
  category: ReviewType;
  id: string | number;
}

export const DeleteButton = ({ category, id }: Props) => {
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  const onClickDelete = () => {
    console.log(category, id);
  };

  return (
    <>
      <button
        type="button"
        className="flex items-center h-8 gap-1 self-end cursor-pointer"
        onClick={() => setShowDeleteAlert(true)}
      >
        <DeleteIcon size={20} />
        <p className="font-body-13 text-text-strong">삭제</p>
      </button>

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
