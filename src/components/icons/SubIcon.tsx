import { SVGIconProps } from '@/types/icon';

const SubIcon = ({
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
        d="M4 0V10C4 11.1046 4.89543 12 6 12H16"
        stroke={stroke}
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default SubIcon;
