import { SVGIconProps } from '@/types/icon';

const YellowFolderIcon = ({ size = 20, ...rest }: SVGIconProps): JSX.Element => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M4.00012 9L26.8406 7.17276C28.0044 7.07966 29.0001 7.99894 29.0001 9.16639V24.1536C29.0001 25.1963 28.199 26.0641 27.1596 26.1472L6.15961 27.8272C4.99588 27.9203 4.00012 27.0011 4.00012 25.8336V9Z"
        fill="#FFC33A"
      />
      <path
        d="M4.00012 6.84027C4.00012 5.80009 4.79745 4.93356 5.83403 4.84717L14.306 4.14117C15.2828 4.05977 16.1747 4.69828 16.4124 5.64919L17.0001 8L4.00012 9V6.84027Z"
        fill="#FFA300"
      />
    </svg>
  );
};

export default YellowFolderIcon;
