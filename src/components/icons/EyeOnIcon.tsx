import { IconProps } from '@/types/icon';

const EyeOnIcon = ({
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
      <circle
        cx="10"
        cy="10"
        r="3"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.8984 8.82545C18.5747 9.47938 18.5747 10.5206 17.8984 11.1746C16.3698 12.6525 13.4058 15 10 15C6.59419 15 3.63024 12.6525 2.10163 11.1746C1.42529 10.5206 1.42529 9.47938 2.10163 8.82545C3.63024 7.34746 6.5942 5 10 5C13.4058 5 16.3698 7.34746 17.8984 8.82545Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EyeOnIcon;
