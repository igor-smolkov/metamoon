import { FC, ReactElement, ReactNode } from 'react';

import styles from './pageMessage.module.scss';

type Props = {
  title: string;
  textContent: ReactNode;
  button?: ReactElement;
};

const PageMessage: FC<Props> = ({ title, textContent, button }) => (
  <section className={styles.root}>
    <h1 className={styles.title}>{title}</h1>
    <div className={styles.text}>{textContent}</div>
    {button && <div className={styles.button}>{button}</div>}
  </section>
);

export { PageMessage };
