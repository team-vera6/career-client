import { IconProps } from '@/types/icon';

const CircleCheckIcon = ({
  size = 20,
  stroke = '#43B000',
  fill = 'none',
  ...props
}: IconProps): JSX.Element => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="1"
        y="1"
        width="18"
        height="18"
        rx="9"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 10.5L8.5 14L14 7.5"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CircleCheckIcon;
