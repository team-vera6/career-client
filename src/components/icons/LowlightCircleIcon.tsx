import { SVGIconProps } from '@/types/icon';

const LowlightCircleIcon = ({
  size = 24,
  stroke = '#999CA1',
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
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="4 4"
      />
      <path
        d="M12 6C12.7879 6 13.5681 6.15519 14.2961 6.45672C15.0241 6.75825 15.6855 7.20021 16.2426 7.75736C16.7998 8.31451 17.2417 8.97595 17.5433 9.7039C17.8448 10.4319 18 11.2121 18 12C18 12.7879 17.8448 13.5682 17.5433 14.2961C17.2417 15.0241 16.7998 15.6855 16.2426 16.2426C15.6855 16.7998 15.0241 17.2418 14.2961 17.5433C13.5681 17.8448 12.7879 18 12 18L12 12V6Z"
        fill={stroke}
      />
    </svg>
  );
};

export default LowlightCircleIcon;
