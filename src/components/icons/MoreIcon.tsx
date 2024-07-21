import { SVGIconProps } from '@/types/icon';

const MoreIcon = ({
  size = 20,
  fill = '#999CA1',
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
      <circle cx="10" cy="5" r="1.5" fill={fill} />
      <circle cx="10" cy="10" r="1.5" fill={fill} />
      <circle cx="10" cy="15" r="1.5" fill={fill} />
    </svg>
  );
};

export default MoreIcon;
