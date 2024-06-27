import { IconProps } from '@/types/icon';

const DashboardIcon = ({ size = 20, fill = '#999CA1', ...props }: IconProps): JSX.Element => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="2" y="2" width="7" height="7" rx="2" fill={fill} />
      <rect x="2" y="11" width="7" height="7" rx="2" fill={fill} />
      <rect x="11" y="2" width="7" height="7" rx="2" fill={fill} />
      <rect x="11" y="11" width="7" height="7" rx="2" fill={fill} />
    </svg>
  );
};

export default DashboardIcon;
