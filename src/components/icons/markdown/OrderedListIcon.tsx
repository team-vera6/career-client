import { SVGIconProps } from '@/types/icon';

const OrderedListIcon = ({ size = 24, stroke = '#66696E', ...rest }: SVGIconProps): JSX.Element => {
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
        d="M6.72754 4.46484V8H5.79492V5.32422H5.77539L4.99414 5.79297V4.99707L5.86816 4.46484H6.72754ZM4.67432 14V13.3311L5.98779 12.2275C6.25635 12.0005 6.41992 11.8345 6.42236 11.5781C6.41992 11.3022 6.22461 11.1338 5.95361 11.1338C5.68018 11.1338 5.49219 11.3071 5.49463 11.6074H4.61084C4.6084 10.8701 5.14062 10.416 5.95361 10.416C6.79102 10.416 7.32568 10.8481 7.32568 11.5C7.32568 11.9102 7.12305 12.2544 6.32471 12.9258L5.96826 13.2334V13.2529H7.36475V14H4.67432ZM5.97559 20.0488C5.14795 20.0488 4.55713 19.5874 4.5498 18.9355H5.4873C5.49463 19.1455 5.69727 19.2969 5.98047 19.2969C6.26123 19.2969 6.4541 19.1382 6.4541 18.9111C6.4541 18.6865 6.23193 18.5278 5.90723 18.5254H5.55078V17.8809H5.90723C6.20264 17.8809 6.40771 17.7222 6.40527 17.5C6.40771 17.2852 6.23438 17.1338 5.98535 17.1338C5.71436 17.1338 5.5166 17.29 5.51172 17.5098H4.62305C4.62549 16.8677 5.19189 16.416 5.98535 16.416C6.76172 16.416 7.30615 16.8506 7.30371 17.4414C7.30615 17.8369 7.00342 18.1079 6.58594 18.1543V18.1836C7.14746 18.2471 7.43799 18.5547 7.43555 18.9893C7.43799 19.6094 6.83252 20.0488 5.97559 20.0488Z"
        fill={stroke}
      />
      <path d="M10 6H20" stroke={stroke} stroke-width="1.5" stroke-linecap="round" />
      <path d="M10 12H20" stroke={stroke} stroke-width="1.5" stroke-linecap="round" />
      <path d="M10 18H20" stroke={stroke} stroke-width="1.5" stroke-linecap="round" />
    </svg>
  );
};

export default OrderedListIcon;