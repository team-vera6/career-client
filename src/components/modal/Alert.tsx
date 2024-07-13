import ModalContainer, { ModalProps } from './ModalContainer';

interface Props extends ModalProps {
  contents?: string;
}

const Alert = ({ contents, ...rest }: Props) => {
  return (
    <ModalContainer {...rest}>
      <p className="font-title-14 text-text-strong mt-6">{contents}</p>
    </ModalContainer>
  );
};

export default Alert;
