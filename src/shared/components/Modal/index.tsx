import { FC, PropsWithChildren, useCallback, useEffect, useRef } from 'react';

import { Portal } from '../Portal';
import { Close } from '../svg';
import styles from './modal.module.scss';

type Props = {
  isOpen: boolean;
  isManualClosing?: boolean;
  withoutCloseButton?: boolean;
  onClose: () => void;
};

const Modal: FC<PropsWithChildren<Props>> = ({
  children,
  isOpen = false,
  isManualClosing = false,
  withoutCloseButton = false,
  onClose,
}) => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (
        e.key === 'Tab' &&
        modalRef.current !== null &&
        !modalRef.current.contains(document.activeElement) &&
        closeRef.current !== null
      ) {
        closeRef.current.focus();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyPress);
    } else if (!isManualClosing) {
      document.body.style.overflow = '';
    }
  }, [isOpen, isManualClosing, handleKeyPress]);

  useEffect(() => {
    if (!isOpen || closeRef.current === null) return;
    closeRef.current.focus();
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <Portal>
          <div className={styles.root} onClick={onClose} onKeyDown={() => {}} tabIndex={-1} role="button">
            <div className={styles.wrapper}>
              <div
                ref={modalRef}
                className={styles.modal}
                onClick={(e) => e.stopPropagation()}
                onKeyDown={() => {}}
                tabIndex={-1}
                role="button"
              >
                {!withoutCloseButton && (
                  <button ref={closeRef} className={styles.close} type="button" onClick={onClose}>
                    <Close />
                  </button>
                )}
                {children}
              </div>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};

export { Modal };
