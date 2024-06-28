import { SVGIconProps } from '@/types/icon';

const RectangleCheckIcon = ({
  size = 20,
  stroke = 'white',
  fill = '#FF5C37',
  ...rest
}: SVGIconProps): JSX.Element => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <rect width={size} height={size} rx="4" fill={fill} />
      <path
        d="M5.5 10L9 14L15 6.5"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RectangleCheckIcon;
