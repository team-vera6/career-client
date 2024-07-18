import { PropsWithChildren } from 'react';

import CloseIcon from '../icons/CloseIcon';
import ModalContainer, { ModalProps } from './ModalContainer';

interface Props extends ModalProps {
  closeIcon?: boolean;
}

const Modal = ({ closeIcon, children, ...rest }: PropsWithChildren<Props>) => {
  return (
    <ModalContainer {...rest}>
      <div className="relative flex flex-col justify-between">
        {closeIcon && (
          <button className="absolute right-6 top-6" onClick={rest.onDismiss}>
            <CloseIcon size={24} />
          </button>
        )}

        {children}
      </div>
    </ModalContainer>
  );
};

export default Modal;
