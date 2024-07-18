import { SVGIconProps } from '@/types/icon';

const UnorderedListIcon = ({
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
      <path d="M10 6H20" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 12H20" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 18H20" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="6" cy="6" r="1" fill={stroke} />
      <circle cx="6" cy="12" r="1" fill={stroke} />
      <circle cx="6" cy="18" r="1" fill={stroke} />
    </svg>
  );
};

export default UnorderedListIcon;
