import { SVGIconProps } from '@/types/icon';

const HighlightCircleIcon = ({
  size = 24,
  stroke = '#FF3D0D',
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
      <rect x="6" y="6" width="12" height="12" rx="6" fill={stroke} />
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="4 4"
      />
    </svg>
  );
};

export default HighlightCircleIcon;
