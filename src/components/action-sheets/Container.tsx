import type { ReactNode } from 'react';

import CloseIcon from '../icons/CloseIcon';

interface Button {
  text: string;
  onClick: () => void;
  type?: 'primary' | 'line';
}

interface Props {
  children: ReactNode;
  closeActionSheet: () => void;
  buttons: Button[];
}

const RightActionSheetContainer = ({ children, closeActionSheet, buttons }: Props) => {
  return (
    <div className="w-screen h-screen relative">
      {/* background dimmer */}
      <div className="fixed w-full h-full top-0 bottom-0 left-0 right-0 z-10 bg-surface-dimmer opacity-24" />

      {/* action sheet */}
      <div className="fixed h-full w-[37.5rem] bg-surface-foreground animate-slide-in-right top-0 bottom-0 right-0 z-20">
        <div className="w-full h-full px-9 pt-8">
          {/* sheet header */}
          <div className="w-full flex items-center justify-between">
            <CloseIcon
              className="stroke-text-normal cursor-pointer"
              size={20}
              onClick={closeActionSheet}
            />

            {/* header buttons */}
            <div className="flex gap-2">
              {buttons.map(({ text, onClick, type = 'primary' }) => (
                <button
                  key={text}
                  className={
                    type === 'line' ? 'button-line button-medium' : 'button-primary button-medium'
                  }
                  onClick={onClick}
                >
                  {text}
                </button>
              ))}
            </div>
          </div>

          <section className="mt-2">{children}</section>
        </div>
      </div>
    </div>
  );
};

export default RightActionSheetContainer;
