import { IconProps } from '@/types/icon';

const IndicatorIcon = ({
  width = 10,
  height = 6,
  fill = '#E33302',
  ...props
}: IconProps): JSX.Element => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 1.2198C0 0.588758 0.577324 0.115465 1.19612 0.239223L9.19612 1.83922C9.66354 1.93271 10 2.34312 10 2.8198V3.1802C10 3.65688 9.66354 4.06729 9.19612 4.16078L1.19612 5.76078C0.577325 5.88453 0 5.41124 0 4.7802V1.2198Z"
        fill={fill}
      />
    </svg>
  );
};

export default IndicatorIcon;
