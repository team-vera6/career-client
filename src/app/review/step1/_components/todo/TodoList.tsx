import { ListItem } from './ListItem';

export const TodoList = ({ week }: { week: 'current' | 'next' }) => {
  // week이 무엇인지에 따라 별도 로직 추가할 예정입니다.
  return (
    <div className="flex flex-col">
      {/* 받아온 데이터에 맞춰 map으로 구현 */}
      <ListItem week={week} />
      <ListItem week={week} />
      <ListItem week={week} />
      <ListItem week={week} />
    </div>
  );
};
