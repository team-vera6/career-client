interface Props {
  percentage: number;
}

const ProgressChip = ({ percentage }: Props) => {
  return (
    <div className="w-[4.25rem] h-6 flex items-center justify-center gap-[1px] border border-line-assistive rounded">
      {/* progress bar */}
      <div className="relative w-5 h-5 flex items-center justify-center">
        <svg width={16} height={16} className="-rotate-90">
          {/* circle background */}
          <circle className="fill-none stroke-transparent" cx={8} cy={8} r={6} strokeWidth={1.5} />

          {/* circle bar */}
          <circle
            className="fill-none stroke-text-primary"
            cx={8}
            cy={8}
            r={6}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeDasharray={2 * Math.PI * 6.5}
            strokeDashoffset={2 * Math.PI * 6.5 * (1 - percentage / 100)}
          />
        </svg>

        {/* center area */}
        <div
          className={
            percentage === 100
              ? 'w-3 h-3 bg-surface-light absolute left-1 top-1 rounded-full -z-10 shrink-0 grow-0'
              : 'w-3 h-3 bg-surface-background absolute left-1 top-1 rounded-full -z-10 shrink-0 grow-0'
          }
        />
      </div>

      {/* label */}
      {percentage === 100 && <p className="font-body-13 text-text-strong pt-[.0625rem]">완료</p>}
      {percentage === 0 && (
        <p className="font-body-13 text-text-normal whitespace-nowrap pt-[.0625rem]">시작 전</p>
      )}
      {percentage > 0 && percentage < 100 && (
        <p className="font-body-13 text-text-primary pt-[.0625rem]">{percentage}%</p>
      )}
    </div>
  );
};

export default ProgressChip;
