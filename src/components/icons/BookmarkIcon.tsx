import { SVGIconProps } from '@/types/icon';

const BookmarkIcon = ({
  size = 20,
  stroke = '#999CA1',
  fill = 'none',
  onClick,
  ...rest
}: SVGIconProps): JSX.Element => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M5 5C5 4.44772 5.44772 4 6 4H14C14.5523 4 15 4.44772 15 5V15.7962C15 16.6554 13.9881 17.1146 13.3415 16.5488L10.6585 14.2012C10.2815 13.8713 9.71852 13.8713 9.3415 14.2012L6.6585 16.5488C6.01192 17.1146 5 16.6554 5 15.7962V5Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BookmarkIcon;
