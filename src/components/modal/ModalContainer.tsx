import { PropsWithChildren } from 'react';

export interface ModalProps {
  isOpen: boolean;
  onDismiss?: () => void;
}

const ModalContainer = ({
  children,
  isOpen,
  onDismiss,
}: PropsWithChildren<ModalProps>) => {
  if (!isOpen) {
    return null;
  }

  return (
    <section className="w-screen h-screen fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center z-50">
      {/* background */}
      <div
        className="fixed top-0 left-0 bottom-0 right-0 w-full h-full z-20 bg-surface-dimmer opacity-24"
        onClick={onDismiss}
      />

      {/* content */}
      <div
        className="min-w-[21.375rem] max-w-[36.625rem] min-h-[9.75rem] bg-neutral-white rounded-[20px] border border-line-normal animate-fade-up z-30"
        style={{
          boxShadow:
            '0px 4px 12px 0px #00000014, 0px 0px 2px 0px rgba(0, 0, 0, 0.05)',
        }}
      >
        {children}
      </div>
    </section>
  );
};

export default ModalContainer;
