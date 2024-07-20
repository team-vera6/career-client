import { SVGIconProps } from '@/types/icon';

const HighlightRectangleIcon = ({
  size = 24,
  fill = '#FF3D0D',
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
      <rect width="24" height="24" rx="8" fill={fill} />
      <path
        d="M11.0537 4.77124C11.3618 3.86879 12.6382 3.8688 12.9463 4.77124L14.3869 8.98987C14.487 9.28287 14.7171 9.513 15.0101 9.61305L19.2288 11.0537C20.1312 11.3618 20.1312 12.6382 19.2288 12.9463L15.0101 14.3869C14.7171 14.487 14.487 14.7171 14.3869 15.0101L12.9463 19.2288C12.6382 20.1312 11.3618 20.1312 11.0537 19.2288L9.61305 15.0101C9.513 14.7171 9.28287 14.487 8.98987 14.3869L4.77124 12.9463C3.86879 12.6382 3.8688 11.3618 4.77124 11.0537L8.98987 9.61305C9.28287 9.513 9.513 9.28287 9.61305 8.98987L11.0537 4.77124Z"
        fill="white"
      />
    </svg>
  );
};

export default HighlightRectangleIcon;
