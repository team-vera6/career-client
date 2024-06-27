import { IconProps } from '@/types/icon';

const ChevronDown20Icon = ({ size = 20, stroke = '#999CA1', ...props }: IconProps): JSX.Element => {
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
        d="M15 8L10 13L5 8"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronDown20Icon;
