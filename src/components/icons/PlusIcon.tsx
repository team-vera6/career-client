import { IconProps } from '@/types/icon';

const PlusIcon = ({
  size = 20,
  stroke = '#999CA1',
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
      <path
        d="M2 10H10M18 10H10M10 10V18M10 10V2"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default PlusIcon;
