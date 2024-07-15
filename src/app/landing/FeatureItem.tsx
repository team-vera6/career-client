interface Props {
  imageUrl: string;
  content: string;
  reverse?: boolean;
}

const FeatureItem = ({ content, reverse = false }: Props) => {
  return (
    <div
      className={
        reverse ? 'w-full flex justify-between flex-row-reverse' : 'w-full flex justify-between'
      }
    >
      <div className="w-[25rem] h-[25rem] bg-neutral-30 flex items-center justify-center rounded-[2.5rem]" />
      <div
        className={
          reverse
            ? 'w-[25rem] h-[25rem] flex items-center font-head-36 text-text-strong text-right'
            : 'w-[25rem] h-[25rem] flex items-center font-head-36 text-text-strong'
        }
      >
        {content}
      </div>
    </div>
  );
};

export default FeatureItem;
