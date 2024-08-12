import { SVGIconProps } from '@/types/icon';

const FridayIcon = ({ size = 48, ...rest }: SVGIconProps): JSX.Element => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M7 14H41V39C41 40.6569 39.6569 42 38 42H10C8.34315 42 7 40.6569 7 39V14Z"
        fill="#EFEFEF"
        stroke="#E1E1E1"
        strokeWidth="2"
      />
      <path
        d="M5 8C5 7.44772 5.44772 7 6 7H42C42.5523 7 43 7.44772 43 8V12C43 12.5523 42.5523 13 42 13H6C5.44772 13 5 12.5523 5 12V8Z"
        fill="#999CA1"
      />
      <path d="M6 15H42V13H6V15Z" fill="#CECECE" />
      <path
        d="M10.5918 34V19.8594H19.9082V22.2812H13.5215V25.7188H19.3027V28.1406H13.5215V34H10.5918ZM21.8418 34V19.8594H27.3887C30.6016 19.8594 32.4473 21.666 32.4473 24.4688C32.4473 26.4023 31.5586 27.8086 29.9473 28.502L32.9551 34H29.7129L27.0078 28.9805H24.7715V34H21.8418ZM24.7715 26.5977H26.8418C28.5801 26.5977 29.4297 25.8848 29.4199 24.4688C29.4297 23.043 28.5801 22.2715 26.8418 22.2617H24.7715V26.5977ZM37.4082 19.8594V34H34.4785V19.8594H37.4082Z"
        fill="#292A2D"
      />
    </svg>
  );
};

export default FridayIcon;
