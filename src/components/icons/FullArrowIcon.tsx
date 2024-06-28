import { SVGIconProps } from '@/types/icon';

const FullArrowIcon = ({ size = 20, stroke = '#999CA1', ...rest }: SVGIconProps): JSX.Element => {
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
        d="M3 3L17 17M3 3H7M3 3V7M17 17V13M17 17H13"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FullArrowIcon;
