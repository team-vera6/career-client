import Dropdown from '@/components/dropdown/Dropdown';
import LinkIcon from '@/components/icons/LinkIcon';
import Textarea from '@/components/inputs/textarea/Textarea';

import { DeleteButton } from '../delete-button/DeleteButton';

export const CurrentReviewItem = () => {
  return (
    <div className="flex flex-col gap-1">
      <div>
        <Textarea className="min-h-[6.5rem]" />
        <div className="flex">
          <LinkIcon size={36} />
          <Dropdown id="hi" items={DROP_DUMMY} className="mt-2" />
        </div>
      </div>
      {/* TODO: 에러 텍스트 추가 예정 */}
      <DeleteButton />
    </div>
  );
};

const DROP_DUMMY = [
  {
    name: 'test1',
    value: 'test2',
  },
  {
    name: 'test2',
    value: 'test2',
  },
];
