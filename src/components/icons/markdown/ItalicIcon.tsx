import { SVGIconProps } from '@/types/icon';

const ItalicIcon = ({ size = 24, stroke = '#66696E', ...rest }: SVGIconProps): JSX.Element => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M10 6.5H16" stroke={stroke} stroke-width="1.5" stroke-linecap="round" />
      <path d="M8 17.5H14" stroke={stroke} stroke-width="1.5" stroke-linecap="round" />
      <path d="M13 6.5L11 17.5" stroke={stroke} stroke-width="1.5" stroke-linecap="round" />
    </svg>
  );
};

export default ItalicIcon;
