import { FC, PropsWithChildren, ReactNode } from 'react';
import cn from 'classnames';

import styles from './modalMessage.module.scss';

type Props = {
  title: string;
  textContent?: ReactNode;
  button?: ReactNode;
};

const ModalMessage: FC<PropsWithChildren<Props>> = ({ title, textContent, button, children }) => (
  <section className={cn(styles.root, { [styles.spaced]: textContent && !button && !children })}>
    <h2 className={styles.title}>{title}</h2>
    {textContent && <div className={styles.text}>{textContent}</div>}
    {children && <div className={styles.content}>{children}</div>}
    {button && <div className={styles.button}>{button}</div>}
  </section>
);

export { ModalMessage };
