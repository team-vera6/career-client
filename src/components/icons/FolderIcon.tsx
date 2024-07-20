import { SVGIconProps } from '@/types/icon';

const FolderIcon = ({ size = 20, fill = '#999CA1', ...rest }: SVGIconProps): JSX.Element => {
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
        d="M2 5C2 3.89543 2.89543 3 4 3H6.33333C6.76607 3 7.18714 3.14036 7.53333 3.4L8.46667 4.1C8.81286 4.35964 9.23393 4.5 9.66667 4.5H16C17.1046 4.5 18 5.39543 18 6.5V15C18 16.1046 17.1046 17 16 17H4C2.89543 17 2 16.1046 2 15V5Z"
        fill={fill}
      />
    </svg>
  );
};

export default FolderIcon;
