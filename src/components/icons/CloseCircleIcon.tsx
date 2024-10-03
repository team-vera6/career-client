import { SVGIconProps } from '@/types/icon';

const CloseCircleIcon = ({
  size = 20,
  stroke = '#999CA1',
  fill = 'none',
  ...rest
}: SVGIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 21"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <circle
        cx="10"
        cy="10.3711"
        r="8.25"
        fill="white"
        stroke={stroke}
        stroke-width="1.5"
      />
      <path
        d="M7 7.37109L13 13.3711M13 7.37109L7 13.3711"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default CloseCircleIcon;
