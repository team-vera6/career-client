import { SVGIconProps } from '@/types/icon';

const BoldIcon = ({
  size = 24,
  stroke = '#66696E',
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
      <path
        d="M7.69995 18.537C7.14767 18.537 6.69995 18.0893 6.69995 17.537V6.3999C6.69995 5.84762 7.14767 5.3999 7.69995 5.3999H12.2842C15.3768 5.3999 16.9473 6.79708 16.9377 8.7749C16.9473 10.3172 15.8615 11.288 14.417 11.5874V11.7144C15.9973 11.787 17.4903 12.9664 17.5 14.908C17.4903 16.9947 15.8228 18.537 12.6526 18.537H7.69995ZM9.60839 16.287H12.0709C13.7578 16.2961 14.4849 15.6428 14.4752 14.6539C14.4849 13.5471 13.5833 12.7668 12.1484 12.7668H9.60839V16.287ZM9.60839 10.8979H11.8576C13.0791 10.907 14.0001 10.2628 13.9904 9.21039C14.0001 8.25777 13.2439 7.61361 11.9158 7.61361H9.60839V10.8979Z"
        fill={stroke}
      />
    </svg>
  );
};

export default BoldIcon;
