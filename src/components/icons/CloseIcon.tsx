import { SVGIconProps } from '@/types/icon';

const CloseIcon = ({ size = 20, stroke = '#999CA1', ...rest }: SVGIconProps): JSX.Element => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M3 3L17 17M17 3L3 17" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};

export default CloseIcon;
