import { IconProps } from '@/types/icon';

const DashedRectangle16Icon = ({
  size = 20,
  stroke = '#CECECE',
  fill = 'none',
  ...props
}: IconProps): JSX.Element => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="2"
        y="2"
        width="12"
        height="12"
        rx="1"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="3 3"
      />
    </svg>
  );
};

export default DashedRectangle16Icon;
