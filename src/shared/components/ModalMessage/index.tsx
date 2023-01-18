import { FC, PropsWithChildren, ReactNode } from 'react';
import cn from 'classnames';

import styles from './modalMessage.module.scss';

type Props = {
  title: string;
  text?: string;
  textContent?: ReactNode | null;
  button?: ReactNode | null;
};

const ModalMessage: FC<PropsWithChildren<Props>> = ({
  title,
  children,
  text = '',
  textContent = null,
  button = null,
}) => (
  <section className={cn(styles.root, { [styles.spaced]: textContent && !button && !children })}>
    <h2 className={styles.title}>{title}</h2>
    {text !== '' && <p className={styles.text}>{text}</p>}
    {textContent !== null && <div className={cn(styles.text, styles.textMultiline)}>{textContent}</div>}
    {children && <div className={styles.content}>{children}</div>}
    {button !== null && <div className={styles.button}>{button}</div>}
  </section>
);

export { ModalMessage };
