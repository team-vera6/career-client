'use client';

import ChevronDown20Icon from '../icons/ChevronDown20Icon';
import { useState } from 'react';

interface DropdownItem {
  name: string;
  value: string | number;
}

interface Props {
  initialItem?: DropdownItem;
  items: Array<DropdownItem>;
}

const Dropdown = ({ initialItem = { name: '선택하세요', value: '' }, items }: Props) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedItem, setSelectedItem] = useState(initialItem);

  const onClickItem = (item: DropdownItem) => {
    setSelectedItem(item);
    setShowOptions(false);
  };

  return (
    <div className="relative w-[15.188rem] h-[2.75rem]">
      <button
        name="select"
        id="select-id"
        className="appearance-none w-full h-full border border-line-normal rounded-lg p-3 font-body-14 cursor-pointer
        flex items-center justify-between
        focus:outline-none focus:border-line-focus hover:border-line-normalHover disabled:bg-surface-base
        disabled:cursor-not-allowed disabled:hover:border-line-normal relative
        "
        onClick={() => setShowOptions((prev) => !prev)}
      >
        <span>{selectedItem.name}</span>
        <ChevronDown20Icon />
      </button>
      {showOptions && (
        <ul
          className="absolute w-full top-[2.75rem] left-0 border border-line-assistive rounded-lg py-1 bg-surface-foreground z-10 cursor-pointer"
          style={{
            boxShadow: '0px 8px 20px 0px #00000014, 0px 0px 2px 0px #0000000D',
          }}
        >
          {items.map((item) => (
            <li
              className="h-[2.75rem] py-3 px-5 hover:bg-gray-100"
              key={item.value}
              value={item.value}
              onClick={() => onClickItem(item)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
