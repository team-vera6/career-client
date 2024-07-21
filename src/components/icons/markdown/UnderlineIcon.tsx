import { SVGIconProps } from '@/types/icon';

const UnderlineIcon = ({
  size = 24,
  stroke = '#66696E',
  ...rest
}: SVGIconProps): JSX.Element => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M7 19H17"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7.5 5.5V11C7.5 13.4853 9.51472 15.5 12 15.5V15.5C14.4853 15.5 16.5 13.4853 16.5 11V5.5"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default UnderlineIcon;
