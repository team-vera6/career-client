import { HTMLAttributes } from 'react';

import { Button } from '@/types/button';

import ModalContainer from './ModalContainer';

interface AlertButton extends Button {
  className?: HTMLAttributes<HTMLButtonElement>['className'];
}

interface Props {
  title: string;
  contents?: string;
  buttons: {
    left: AlertButton;
    right: AlertButton;
  };
  closeAlert: () => void;
}

const Alert = ({ title, contents, buttons, closeAlert }: Props) => {
  return (
    <ModalContainer title={title} closeModal={closeAlert} buttons={buttons}>
      <p className="font-title-14 text-text-strong mt-6">{contents}</p>
    </ModalContainer>
  );
};

export default Alert;
