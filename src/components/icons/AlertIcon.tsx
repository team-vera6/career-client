import { SVGIconProps } from '@/types/icon';

const AlertIcon = ({ size = 20, stroke = '#FFD02A', ...rest }: SVGIconProps): JSX.Element => {
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
        d="M9.12842 3.54947L1.83827 16.5097C1.46331 17.1763 1.94502 18 2.70985 18L17.2902 18C18.055 18 18.5367 17.1763 18.1617 16.5097L10.8716 3.54947C10.4893 2.86982 9.51073 2.86982 9.12842 3.54947Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 8V12M10 14.5V15"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default AlertIcon;
