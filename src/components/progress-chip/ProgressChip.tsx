interface Props {
  percentage: number;
  label?: string;
}

const ProgressChip = ({ percentage, label }: Props) => {
  return (
    <div className="w-16 h-6 flex items-center justify-center gap-[1px] border border-line-assistive rounded">
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
        <div className="w-3 h-3 bg-surface-background absolute left-1 top-1 rounded-full -z-10" />
      </div>

      {/* label */}
      {label ? <p>{label}</p> : <p className="font-body-13 text-text-primary">{percentage}%</p>}
    </div>
  );
};

export default ProgressChip;
