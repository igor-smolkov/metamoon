import { FC, PropsWithChildren } from 'react';

import styles from './main.module.scss';

type Props = {};

const Main: FC<PropsWithChildren<Props>> = ({ children }) => (
  <div className={styles.root}>
    <main className={styles.main}>{children}</main>
  </div>
);

export { Main };
