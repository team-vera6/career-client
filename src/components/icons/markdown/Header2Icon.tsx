import { SVGIconProps } from '@/types/icon';

const Header2Icon = ({ size = 24, stroke = '#66696E', ...rest }: SVGIconProps): JSX.Element => {
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
        d="M15.5566 18L15.5469 16.9355L18.0859 14.6016C18.7451 13.9717 19.1016 13.5811 19.1016 13.0195C19.1016 12.3896 18.6279 11.999 17.9785 12.0039C17.3145 11.999 16.8799 12.4189 16.8848 13.0977H15.4883C15.4834 11.7158 16.5088 10.832 17.998 10.832C19.5117 10.832 20.5176 11.6963 20.5176 12.9219C20.5176 13.7275 20.127 14.3867 18.6719 15.7051L17.5977 16.75V16.7891H20.6152V18H15.5566Z"
        fill={stroke}
      />
    </svg>
  );
};

export default Header2Icon;
