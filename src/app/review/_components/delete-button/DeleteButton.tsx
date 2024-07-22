import DeleteIcon from '@/components/icons/DeleteIcon';

export const DeleteButton = () => {
  return (
    <div className="flex items-center h-8 gap-1 self-end">
      <DeleteIcon size={20} />
      <p>삭제</p>
    </div>
  );
};
