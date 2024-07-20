'use client';

import DeleteIcon from '@/components/icons/DeleteIcon';

export const MoveNextButton = ({ week }: { week: 'current' | 'next' }) => {
  return (
    <button type="button" className="button-line button-small whitespace-nowrap">
      {week === 'current' ? '다음주로 이동' : '되돌리기'}
    </button>
  );
};

export const DeleteButton = () => {
  return (
    <button type="button">
      <DeleteIcon />
    </button>
  );
};
