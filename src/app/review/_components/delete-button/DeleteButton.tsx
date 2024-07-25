import DeleteIcon from '@/components/icons/DeleteIcon';

import { ReviewType } from '../../types';

export const DeleteButton = ({ category }: { category: ReviewType }) => {
  return (
    <div className="flex items-center h-8 gap-1 self-end">
      <DeleteIcon size={20} />
      <p className="font-body-13 text-text-strong">삭제</p>
    </div>
  );
};
