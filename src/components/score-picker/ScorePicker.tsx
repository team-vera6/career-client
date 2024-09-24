import { Fragment, useState } from 'react';

import { cn } from '@/utils/tailwind';

const breakPoints = [1, 2, 3, 4, 5, 6, 7];

interface Props {
  score: number;
  setScore: (score: number) => void;
}

const ScorePicker = ({ score, setScore }: Props) => {
  const [hoveredScore, setHoveredScore] = useState(score);

  return (
    <div
      className="flex items-center gap-2"
      onMouseLeave={() => setHoveredScore(score)}
    >
      {breakPoints.map((point) => (
        <Fragment key={point}>
          <Checkpoint
            active={hoveredScore >= point}
            onHover={() => setHoveredScore(point)}
            onClick={() => {
              setHoveredScore(point);
              setScore(point);
            }}
          />
          {point !== 7 && <Connection active={hoveredScore > point} />}
        </Fragment>
      ))}
    </div>
  );
};

export default ScorePicker;

interface CheckpointProps {
  active?: boolean;
  onClick?: () => void;
  onHover?: () => void;
}
const Checkpoint = ({ active = false, onClick, onHover }: CheckpointProps) => {
  return (
    <div className="cursor-pointer" onClick={onClick} onMouseOver={onHover}>
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
      <div
        className={cn(
          'w-0.5 h-2 rounded-sm',
          active ? 'bg-text-primary' : 'bg-text-assistive',
        )}
      />
      <div
        className={cn(
          'w-0.5 h-2 rounded-sm',
          active ? 'bg-text-primary' : 'bg-text-assistive',
        )}
      />
      <div
        className={cn(
          'w-0.5 h-2 rounded-sm',
          active ? 'bg-text-primary' : 'bg-text-assistive',
        )}
      />
    </div>
  );
};
