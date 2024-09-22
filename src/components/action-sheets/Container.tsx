'use client';

import type { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

import { Button } from '@/types/button';
import { cn } from '@/utils/tailwind';

import CloseIcon from '../icons/CloseIcon';

interface ActionSheetButton extends Button {
  buttonStyle?: 'primary' | 'line';
}

interface Props {
  isOpen: boolean;
  closeActionSheet: () => void;
  buttons: ActionSheetButton[];
  disableAnimation?: boolean;
}

const RightActionSheetContainer = ({
  children,
  isOpen,
  closeActionSheet,
  buttons,
  disableAnimation,
}: PropsWithChildren<Props>) => {
  if (!isOpen) return null;
  if (typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <div className="w-screen h-screen fixed z-30">
      <div className="w-screen h-screen relative">
        {/* background dimmer */}
        <div
          className="fixed w-full h-full top-0 bottom-0 left-0 right-0 z-10 bg-surface-dimmer opacity-[0.76]"
          onClick={closeActionSheet}
        />

        {/* action sheet */}
        <div
          className={cn(
            'fixed h-full w-[37.5rem] bg-surface-foreground top-0 bottom-0 right-0 z-20',
            !disableAnimation && 'animate-slide-in-right',
          )}
        >
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
                {buttons.map(
                  ({
                    text,
                    onClick,
                    buttonStyle = 'primary',
                    disabled = false,
                    ...rest
                  }) => (
                    <button
                      type="button"
                      key={text}
                      className={cn(
                        'button-medium',
                        buttonStyle === 'line'
                          ? 'button-line'
                          : 'button-primary',
                      )}
                      onClick={onClick}
                      disabled={disabled}
                      {...rest}
                    >
                      {text}
                    </button>
                  ),
                )}
              </div>
            </div>

            <section className="mt-2">{children}</section>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default RightActionSheetContainer;
