import { SVGIconProps } from '@/types/icon';

const RefreshIcon = ({
  size = 20,
  stroke = '#999CA1',
  ...rest
}: SVGIconProps): JSX.Element => {
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
        d="M5.49989 9.50021L3.99989 6.50021L1 8.00024L5.49989 9.50021Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 3C12.151 3 13.7559 3.54478 15.0657 4.54985C16.3755 5.55492 17.3171 6.96411 17.7444 8.55886C18.1718 10.1536 18.0609 11.8448 17.4291 13.3701C16.7973 14.8955 15.6798 16.1697 14.25 16.9952C12.8202 17.8207 11.1579 18.1513 9.52105 17.9358C7.88417 17.7203 6.36414 16.9707 5.1967 15.8033C4.02926 14.6359 3.27966 13.1158 3.06416 11.4789C2.84866 9.84206 3.17931 8.17981 4.00481 6.75"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RefreshIcon;
