import PlusIcon from '@/components/icons/PlusIcon';
import { cn } from '@/utils/tailwind';

interface Props {
  category: 'currentTodo' | 'nextTodo' | 'highLight' | 'lowLight';
}

export const AddButton = ({ category }: Props) => {
  return (
    <button
      className={cn(
        'button-small',
        category === 'currentTodo' || category === 'nextTodo'
          ? 'button-text text-center'
          : 'button-line',
      )}
    >
      <PlusIcon size={20} />
      <p>추가</p>
    </button>
  );
};
