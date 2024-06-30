import { Fragment } from 'react';

const breakPoints = [1, 2, 3, 4, 5, 6, 7];

interface Props {
  score: number;
  setScore: (score: number) => void;
}

const ScorePicker = ({ score = 0, setScore }: Props) => {
  return (
    <div className="flex items-center gap-2">
      {breakPoints.map((point) => (
        <Fragment key={point}>
          <Checkpoint active={score >= point} onClick={() => setScore(point)} />
          {point !== 7 && <Connection active={score > point} />}
        </Fragment>
      ))}
      {/* <Checkpoint active />
      <Connection active />
      <Checkpoint active />
      <Connection />
      <Checkpoint />
      <Connection />
      <Checkpoint />
      <Connection />
      <Checkpoint />
      <Connection />
      <Checkpoint />
      <Connection />
      <Checkpoint /> */}
    </div>
  );
};

export default ScorePicker;

const Checkpoint = ({ active = false, onClick }: { active?: boolean; onClick?: () => void }) => {
  return (
    <div className="cursor-pointer" onClick={onClick}>
      {active ? (
        <div className="w-9 h-9 rounded-full border border-text-primary bg-surface-foreground flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-text-primary" />
        </div>
      ) : (
        <div className="border border-text-assistive bg-surface-foreground rounded-full w-9 h-9 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-text-assistive" />
        </div>
      )}
    </div>
  );
};

const Connection = ({ active = false }: { active?: boolean }) => {
  return (
    <div className="flex gap-[3px]">
      {active ? (
        <>
          <div className="w-0.5 h-2 rounded-sm bg-text-primary" />
          <div className="w-0.5 h-2 rounded-sm bg-text-primary" />
          <div className="w-0.5 h-2 rounded-sm bg-text-primary" />
        </>
      ) : (
        <>
          <div className="w-0.5 h-2 rounded-sm bg-text-assistive" />
          <div className="w-0.5 h-2 rounded-sm bg-text-assistive" />
          <div className="w-0.5 h-2 rounded-sm bg-text-assistive" />
        </>
      )}
    </div>
  );
};
