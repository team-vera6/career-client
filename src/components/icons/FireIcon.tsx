import { SVGIconProps } from '@/types/icon';

const FireIcon = ({ size = 20, ...rest }: SVGIconProps): JSX.Element => {
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
        d="M24.9761 8.85588C25.3033 11.0391 25.6833 12.2887 24.1217 12.2887C21.9969 12.2887 21.9961 7.25988 18.4001 4.39508C14.8425 1.56148 12.1889 2.25028 12.1329 2.26548C12.1321 2.26628 12.1305 2.26788 12.1297 2.26868C15.0929 4.74228 13.4401 8.80788 11.5009 9.92868C9.64009 11.0039 7.51609 9.64788 8.62809 6.45668C6.18249 9.80068 4.07129 13.8527 4.07129 17.8903C4.07129 24.4783 9.41209 29.8191 16.0001 29.8191C22.5881 29.8191 27.9289 24.4783 27.9289 17.8903C27.9289 14.7775 26.6713 11.6559 24.9761 8.85588Z"
        fill="#FF723E"
      />
      <path
        d="M16.0001 16.0146C16.0001 16.0146 21.1873 19.0018 21.1873 23.1754C21.1873 26.0402 18.8649 28.3626 16.0001 28.3626C13.1353 28.3626 10.8129 26.0402 10.8129 23.1754C10.8129 19.0018 16.0001 16.0146 16.0001 16.0146Z"
        fill="#FFEFEB"
      />
    </svg>
  );
};

export default FireIcon;
