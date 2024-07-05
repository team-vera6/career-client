interface Props {
  percentage: number;
}

const ProgressBar = ({ percentage }: Props) => {
  return (
    <div className="relative rounded bg-[#f7f7f7] h-4 w-full flex items-center justify-evenly">
      <Indicator percentage={percentage} />
      <div
        className="absolute left-0 h-4 bg-surface-normal z-10 rounded animate-expand"
        style={{
          width: `${percentage}%`,
        }}
      />

      <Divider light={percentage > 16} />
      <Divider light={percentage > 33} />
      <Divider light={percentage > 50} />
      <Divider light={percentage > 66} />
      <Divider light={percentage > 83} />
    </div>
  );
};

export default ProgressBar;

const Indicator = ({ percentage }: { percentage: number }) => (
  <div
    className={
      'bg-surface-foreground border-2 border-surface-normal absolute -translate-x-2 w-4 h-7 rounded-lg z-30'
    }
    style={{
      boxShadow: '0px 1px 2px 0px #0000001F',
      left: `${percentage}%`,
    }}
  />
);

const Divider = ({ light = false }: { light?: boolean }) => (
  <div
    className={
      light
        ? 'w-0.5 h-1.5 rounded-sm bg-text-invert z-20'
        : 'w-0.5 h-1.5 rounded-sm bg-text-neutral z-20'
    }
  />
);
