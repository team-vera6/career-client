import { IconProps } from '@/types/icon';

const ChevronLeft20Icon = ({ size = 20, stroke = '#999CA1', ...props }: IconProps): JSX.Element => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.5 16.5L5.5 9.5L12.5 2.5"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronLeft20Icon;
