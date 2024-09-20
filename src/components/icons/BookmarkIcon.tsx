import { SVGIconProps } from '@/types/icon';

const BookmarkIcon = ({
  size = 20,
  stroke = '#999CA1',
  fill = 'none',
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
        d="M16 9V16.1313C16 16.93 15.1099 17.4064 14.4453 16.9634L10 13.9998"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 4C4 3.44772 4.44772 3 5 3H15C15.5523 3 16 3.44772 16 4V8.98288C16 9.30723 15.8427 9.61143 15.578 9.7989L5.57802 16.8822C4.91576 17.3513 4 16.8778 4 16.0662V4Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BookmarkIcon;
