import { SVGIconProps } from '@/types/icon';

const CodeBlockIcon = ({ size = 24, stroke = '#66696E', ...rest }: SVGIconProps): JSX.Element => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M10 18L14 6" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M7.29286 8.46447L3.75732 12L7.29286 15.5355"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.9498 15.5355L20.4854 12L16.9498 8.46447"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CodeBlockIcon;
