import { SVGIconProps } from '@/types/icon';

const Header1Icon = ({ size = 24, stroke = '#66696E', ...rest }: SVGIconProps): JSX.Element => {
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
        d="M3.72852 18V5.98047H5.55469V11.1934H11.5312V5.98047H13.3574V18H11.5312V12.7539H5.55469V18H3.72852Z"
        fill={stroke}
      />
      <path
        d="M18.6035 10.9297V18H17.1289V12.3262H17.0898L15.4688 13.3418V12.043L17.2168 10.9297H18.6035Z"
        fill={stroke}
      />
    </svg>
  );
};

export default Header1Icon;
