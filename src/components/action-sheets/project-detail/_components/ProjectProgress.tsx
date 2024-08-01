import ProgressLine from '@/components/progress-line/ProgressLine';

interface Props {
  startDate: string;
  endDate: string;
  percentage: number;
}

const ProjectProgress = ({ startDate, endDate, percentage }: Props) => {
  return (
    <div className="flex flex-col gap-2 mb-4">
      <div className="flex items-center justify-between">
        <p className="font-body-14 text-text-strong">
          {startDate} - {endDate}
        </p>
        <p className="font-body-14 text-text-primary">{percentage}%</p>
      </div>

      <ProgressLine percentage={percentage} />
    </div>
  );
};

export default ProjectProgress;
