import { cn } from '@/utils/tailwind';

interface Props {
  imageUrl: string;
  content: string;
  reverse?: boolean;
}

const FeatureItem = ({ content, reverse = false }: Props) => {
  return (
    <div
      className={cn('w-full flex justify-between', {
        'flex-row-reverse': reverse,
      })}
    >
      <div className="w-[25rem] h-[25rem] bg-neutral-30 flex items-center justify-center rounded-[2.5rem]" />
      <div
        className={cn('w-[25rem] h-[25rem] flex items-center font-head-36 text-text-strong', {
          'justify-end': reverse,
        })}
      >
        {content}
      </div>
    </div>
  );
};

export default FeatureItem;
