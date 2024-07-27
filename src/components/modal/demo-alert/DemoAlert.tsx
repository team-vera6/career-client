import { SetStateAction } from 'jotai';
import { Dispatch } from 'react';

import Alert from '../Alert';

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const DemoAlert = ({ isOpen, setIsOpen }: Props) => {
  const onDismiss = () => {
    setIsOpen(false);
  };
  return (
    <Alert
      isOpen={isOpen}
      onDismiss={onDismiss}
      title="준비중인 서비스입니다."
      buttons={{
        left: {
          text: '확인',
          className:
            'button-secondary button-medium font-body-14 text-text-strong',
        },
        right: {
          text: '닫기',
          className:
            'button-primary button-medium font-body-14 text-text-invert',
          // onClick: onClickDelete,
        },
      }}
    />
  );
};

export default DemoAlert;
