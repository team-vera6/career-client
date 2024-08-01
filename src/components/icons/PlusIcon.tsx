import { SVGIconProps } from '@/types/icon';

const PlusIcon = ({
  size = 20,
  stroke = '#999CA1',
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
      <path
        d="M3 10H10M17 10H10M10 10V17M10 10V3"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default PlusIcon;
