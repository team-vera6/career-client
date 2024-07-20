import { Score } from './Score';

export const Achievement = () => {
  return (
    <div className="h-36 bg-surface-foreground rounded-2xl flex items-center justify-center flex-col gap-4">
      <div className="flex justify-between w-[26.25rem] font-title-14 text-text-strong">
        <p>아쉬워요</p>
        <p>만족해요</p>
      </div>
      <Score />
    </div>
  );
};
