import { IconProps } from '@/types/icon';

const DeleteIcon = ({
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
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 5H16L15.142 16.1534C15.0619 17.1954 14.193 18 13.1479 18H6.85206C5.80699 18 4.93811 17.1954 4.85795 16.1534L4 5Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 9L8 14"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 4.5L14.5 2L5.5 2L5 4.5"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 5L2 5"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 9L12 14"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DeleteIcon;
