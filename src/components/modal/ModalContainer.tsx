import { HTMLAttributes, PropsWithChildren } from 'react';

import { Button } from '@/types/button';
import { cn } from '@/utils/tailwind';

import CloseIcon from '../icons/CloseIcon';

interface ModalButton extends Button {
  className?: HTMLAttributes<HTMLButtonElement>['className'];
}

interface Props {
  title?: string;
  buttons?: {
    left: ModalButton;
    right: ModalButton;
  };
  closeModal: () => void;
}

const ModalContainer = ({ title, buttons, closeModal, children }: PropsWithChildren<Props>) => {
  return (
    <div className="w-screen h-screen fixed top-0 bottom-0 left-0 right-0">
      {/* background */}
      <div
        className="fixed top-0 left-0 bottom-0 right-0 w-full h-full z-20 bg-surface-dimmer opacity-24 flex items-center justify-center"
        onClick={closeModal}
      />

      {/* modal content */}
      <div className="w-full h-full flex items-center justify-center z-30 relative animate-fade-up">
        <div
          className="py-5 px-6 border border-line-normal relative rounded-[20px] bg-neutral-white min-w-[21.375rem] max-w-[36.625rem] min-h-[9.75rem] flex flex-col justify-between"
          style={{
            boxShadow: '0px 4px 12px 0px #00000014',
          }}
        >
          <CloseIcon
            size={24}
            onClick={closeModal}
            className="cursor-pointer absolute right-6 top-[1.625rem]"
          />

          {/* title */}
          {title && <p className="font-head-20 text-text-strong mt-0.5">{title}</p>}

          {/* contents */}
          {children}

          {/* buttons */}
          {buttons && (
            <div className="flex items-center gap-2.5 justify-end">
              <button
                className={cn('button-primary button-medium', buttons.left.className)}
                onClick={(e) => {
                  buttons.left.onClick?.(e);
                  closeModal();
                }}
              >
                {buttons.left.text}
              </button>
              <button
                className={cn('button-primary button-medium', buttons.right.className)}
                onClick={(e) => {
                  buttons.right.onClick?.(e);
                  closeModal();
                }}
              >
                {buttons.right.text}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalContainer;
