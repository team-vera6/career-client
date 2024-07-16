import { SVGIconProps } from '@/types/icon';

const MarkdownLinkIcon = ({
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
      <path d="M8 12H16" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.25 16.75V15.25H7C5.20507 15.25 3.75 13.7949 3.75 12C3.75 10.2051 5.20507 8.75 7 8.75H11.25V7.25H7C4.37665 7.25 2.25 9.37665 2.25 12C2.25 14.6234 4.37665 16.75 7 16.75H11.25ZM12.75 16.75H17C19.6234 16.75 21.75 14.6234 21.75 12C21.75 9.37665 19.6234 7.25 17 7.25H12.75V8.75H17C18.7949 8.75 20.25 10.2051 20.25 12C20.25 13.7949 18.7949 15.25 17 15.25H12.75V16.75Z"
        fill={stroke}
      />
    </svg>
  );
};

export default MarkdownLinkIcon;
