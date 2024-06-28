import { SVGIconProps } from '@/types/icon';

const DashedSquare20Icon = ({
  size = 20,
  stroke = '#CECECE',
  fill = 'none',
  ...rest
}: SVGIconProps): JSX.Element => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <rect
        x="2"
        y="2"
        width="16"
        height="16"
        rx="3"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="2 4"
      />
    </svg>
  );
};

export default DashedSquare20Icon;
