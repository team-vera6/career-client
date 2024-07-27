'use client';

import {
  CSSProperties,
  HTMLAttributes,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';

import { cn } from '@/utils/tailwind';

import ChevronDown20Icon from '../icons/ChevronDown20Icon';

export interface DropdownItem extends CSSProperties {
  name: string;
  value: string | number;
}

export interface DropdownProps {
  id: string;
  initialItem?: string | number;
  items: Array<DropdownItem>;
  className?: HTMLAttributes<HTMLDivElement>['className'];
  onSelect?: (item: DropdownItem) => void;
}

const Dropdown = ({
  id,
  initialItem = '',
  items,
  className,
  onSelect,
  children,
  ...rest
}: PropsWithChildren<DropdownProps>) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedValue, setSelectedValue] = useState(initialItem);
  const [selectedName, setSelectedName] = useState('');

  const onClickItem = (item: DropdownItem) => {
    setSelectedValue(item.value);
    setShowOptions(false);

    onSelect && onSelect(item);
  };

  useEffect(() => {
    const defaultItem = items.filter((el) => el.value === selectedValue)[0];
    setSelectedName(defaultItem?.name ?? '');
  }, [items, selectedValue]);

  return (
    <div className={cn('relative w-full h-[2.75rem]', className)} {...rest}>
      <button
        type="button"
        id={id}
        className="appearance-none w-full h-full p-3 font-body-14 cursor-pointer
        border border-line-normal rounded-lg
        flex items-center justify-between
        focus:outline-none focus:border-line-focus hover:border-line-normalHover
        disabled:bg-surface-base disabled:cursor-not-allowed disabled:hover:border-line-normal"
        onClick={() => setShowOptions((prev) => !prev)}
      >
        <span>{selectedName}</span>
        <ChevronDown20Icon />
      </button>

      {showOptions && (
        <ul
          className="absolute w-full top-[2.75rem] left-0 py-1 z-10 cursor-pointer
          border border-line-assistive rounded-lg  bg-surface-foreground"
          style={{
            boxShadow: '0px 8px 20px 0px #00000014, 0px 0px 2px 0px #0000000D',
          }}
        >
          {items.map((item) => (
            <li
              className="h-[2.75rem] py-3 px-5 hover:bg-surface-background"
              key={item.value}
              value={item.value}
              onClick={() => onClickItem(item)}
            >
              {item.name}
            </li>
          ))}
          {children}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
