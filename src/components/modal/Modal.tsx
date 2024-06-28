import CloseIcon from '../icons/CloseIcon';

interface Props {
  title: string;
  contents?: string;
  buttons: {
    left: {
      text: string;
      onClick?: () => void;
    };
    right: {
      text: string;
      onClick?: () => void;
    };
  };
  closeModal: () => void;
}

const Modal = ({ title, contents, buttons, closeModal }: Props) => {
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
            className="cursor-pointer absolute right-6 top-[1.75rem]"
          />

          {/* title, contents */}
          <div>
            <p className="font-head-20 text-text-strong mt-0.5">{title}</p>
            <p className="font-title-14 text-text-strong mt-6">{contents}</p>
          </div>

          {/* buttons */}
          <div className="flex items-center gap-2.5 justify-end">
            <button
              className="button-secondary button-medium"
              onClick={() => {
                buttons.left.onClick?.();
                closeModal();
              }}
            >
              {buttons.left.text}
            </button>
            <button
              className="button-primary button-medium"
              onClick={() => {
                buttons.left.onClick?.();
                closeModal();
              }}
            >
              {buttons.right.text}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
