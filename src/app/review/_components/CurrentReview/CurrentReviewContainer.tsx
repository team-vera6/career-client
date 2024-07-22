import Dropdown from '@/components/dropdown/Dropdown';
import LinkIcon from '@/components/icons/LinkIcon';
import Textarea from '@/components/inputs/textarea/Textarea';

export const CurrentReviewContainer = () => {
  return (
    <div className="w-full p-5 bg-surface-foreground rounded-xl">
      <Textarea className="min-h-[6.5rem]" />
      <div className="flex">
        <LinkIcon size={36} />
        <Dropdown id="hi" items={DROP_DUMMY} />
      </div>
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
