import { useEffect, useRef, useState } from 'react';

import Alert from '../Alert';
import ModalContainer, { ModalProps } from '../ModalContainer';
import BottomMenu from './BottomMenu';
import TopMenu from './TopMenu';

interface Props extends ModalProps {
  onSaveText: (text: string) => void;
  value: string;
  readonly?: boolean;
  lastUpdated?: string;
  id?: number;
  isBookmark?: boolean;
}

const MemoEditor = ({
  onSaveText,
  value,
  readonly = false,
  lastUpdated,
  id,
  isBookmark,
  isOpen,
  onDismiss,
}: Props) => {
  const editorRef = useRef<HTMLTextAreaElement>(null);

  const [input, setInput] = useState(value);
  const [showExitAlert, setShowExitAlert] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    setInput(value);
  }, [value, isOpen]);

  const onClickBackground = () => {
    if (readonly) {
      onDismiss?.();
      return;
    }

    if (input !== value) {
      setShowExitAlert(true);
    } else {
      onDismiss?.();
    }
  };

  return (
    <ModalContainer isOpen={isOpen} onDismiss={onClickBackground}>
      <section className="flex flex-col justify-between">
        <TopMenu
          id={id}
          readonly={readonly}
          onDismiss={onDismiss}
          lastUpdated={lastUpdated}
          onSaveText={() => onSaveText(input)}
          hasChanges={input !== value}
        />

        <textarea
          ref={editorRef}
          className="w-full h-full px-6 py-4 resize-none outline-none font-body-14 text-text-strong min-h-[16.5rem] min-w-[28.5rem]"
          name="memo"
          id="memo"
          autoFocus
          value={input}
          onChange={(e) => setInput(e.currentTarget.value)}
          readOnly={readonly}
          onKeyDown={(e) => {
            if (readonly) return;

            if (
              (e.ctrlKey && e.key === 'Enter') ||
              (e.metaKey && e.key === 'Enter')
            ) {
              onSaveText(input);
              onDismiss?.();
            }
          }}
          onFocus={(e) =>
            e.currentTarget.setSelectionRange(
              e.currentTarget.value.length,
              e.currentTarget.value.length,
            )
          }
        />

        <BottomMenu
          id={id}
          lastUpdated={lastUpdated}
          readonly={readonly}
          isBookmark={isBookmark}
        />
      </section>

      <Alert
        isOpen={showExitAlert}
        onDismiss={() => setShowExitAlert(false)}
        title="메모를 저장하시겠어요?"
        buttons={{
          left: { text: '아니오', onClick: onDismiss },
          right: {
            text: '예',
            onClick: () => {
              onSaveText(input);
              onDismiss?.();
            },
          },
        }}
      />
    </ModalContainer>
  );
};

export default MemoEditor;
