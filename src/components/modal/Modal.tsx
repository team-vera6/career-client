import { PropsWithChildren } from 'react';

import CloseIcon from '../icons/CloseIcon';
import ModalContainer, { ModalProps } from './ModalContainer';

interface Props extends ModalProps {
  title?: string;
  closeIcon?: boolean;
}

const Modal = ({ title, closeIcon, children, ...rest }: PropsWithChildren<Props>) => {
  return (
    <ModalContainer {...rest}>
      <div className="relative flex flex-col justify-between">
        {closeIcon && (
          <button className="absolute right-6 top-6" onClick={rest.onDismiss}>
            <CloseIcon size={24} />
          </button>
        )}

        {title ? <p className="font-head-20 text-text-strong px-6 py-5.5">{title}</p> : null}

        {children}
      </div>
    </ModalContainer>
  );
};

export default Modal;
