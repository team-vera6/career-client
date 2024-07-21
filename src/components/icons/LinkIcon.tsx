import { SVGIconProps } from '@/types/icon';

const LinkIcon = ({
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
        d="M5 9V13C5 14.1046 5.89543 15 7 15H11"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="15" cy="15" r="2.25" stroke={stroke} strokeWidth="1.5" />
      <circle cx="5" cy="5" r="2.25" stroke={stroke} strokeWidth="1.5" />
    </svg>
  );
};

export default LinkIcon;
