import { SVGIconProps } from '@/types/icon';

const EditIcon = ({ size = 20, stroke = '#999CA1', ...rest }: SVGIconProps): JSX.Element => {
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
        d="M9 4H4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H14C15.1046 18 16 17.1046 16 16V11"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.6035 1.64648L9.94666 7.30334L9.15913 10.243C9.06099 10.6093 9.3905 10.9473 9.75923 10.8584L12.7751 10.1318L18.4319 4.47491L15.6035 1.64648Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EditIcon;
