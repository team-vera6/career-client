interface Props {
  percentage: number;
}

const ProgressLine = ({ percentage }: Props) => {
  return (
    <div className="w-full bg-surface-background rounded relative h-1.5">
      <div
        className="absolute left-0 top-0 bottom-0 h-1.5 rounded bg-surface-normal"
        style={{
          width: `${percentage}%`,
        }}
      />
    </div>
  );
};

export default ProgressLine;
