import { useEffect, useRef, useState } from 'react';

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
  ...rest
}: Props) => {
  const editorRef = useRef<HTMLTextAreaElement>(null);

  const [input, setInput] = useState(value);

  useEffect(() => {
    if (!rest.isOpen) return;

    setInput(value);
  }, [value, rest.isOpen]);

  return (
    <ModalContainer {...rest}>
      <section className="flex flex-col justify-between">
        <TopMenu
          id={id}
          readonly={readonly}
          onDismiss={rest.onDismiss}
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
          onKeyDown={(e) => {
            if (
              (e.ctrlKey && e.key === 'Enter') ||
              (e.metaKey && e.key === 'Enter')
            ) {
              onSaveText(input);
              rest.onDismiss?.();
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
    </ModalContainer>
  );
};

export default MemoEditor;
