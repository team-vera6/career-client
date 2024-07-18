import PlusIcon from '@/components/icons/PlusIcon';

interface Props {
  category: 'currentTodo' | 'nextTodo' | 'highLight' | 'lowLight';
}

export const AddButton = ({ category }: Props) => {
  const getButtonStyle = (category: Props['category']) => {
    if (category === 'currentTodo' || category === 'nextTodo') {
      return 'button-text button-small text-center';
    }
    return 'button-line button-small';
  };

  return (
    <button className={getButtonStyle(category)}>
      <PlusIcon />
      <p>추가</p>
    </button>
  );
};
