import { HTMLAttributes } from 'react';

import { Button } from '@/types/button';

import CloseIcon from '../icons/CloseIcon';

import ModalContainer, { ModalProps } from './ModalContainer';

interface AlertButton extends Button {
  className?: HTMLAttributes<HTMLButtonElement>['className'];
}

interface Props extends ModalProps {
  title: string;
  content?: string;
  buttons?: {
    left: AlertButton;
    right: AlertButton;
  };
}

const Alert = ({ title, content, buttons, ...rest }: Props) => {
  return (
    <ModalContainer {...rest}>
      <div className="w-full h-full flex items-center justify-center z-30 relative animate-fade-up">
        <div
          className="py-5 px-6 border border-line-normal relative rounded-[20px] bg-neutral-white min-w-[21.375rem] max-w-[36.625rem] min-h-[9.75rem] flex flex-col justify-between"
          style={{
            boxShadow: '0px 4px 12px 0px #00000014',
          }}
        >
          <CloseIcon
            size={24}
            onClick={rest.onDismiss}
            className="cursor-pointer absolute right-6 top-[1.625rem]"
          />

          {/* title */}
          <p className="font-head-20 text-text-strong mt-0.5">{title}</p>

          {/* contents */}
          {content && <p className="font-title-14 text-text-strong mt-6">{content}</p>}

          {/* buttons */}
          {buttons && (
            <div className="flex items-center gap-2.5 justify-end">
              <button
                className={buttons.left.className ?? 'button-secondary button-medium'}
                onClick={(event) => {
                  buttons.left.onClick?.(event);
                  rest.onDismiss?.();
                }}
              >
                {buttons.left.text}
              </button>
              <button
                className={buttons.right.className ?? 'button-primary button-medium'}
                onClick={(event) => {
                  buttons.right.onClick?.(event);
                  rest.onDismiss?.();
                }}
              >
                {buttons.right.text}
              </button>
            </div>
          )}
        </div>
      </div>
    </ModalContainer>
  );
};

export default Alert;
