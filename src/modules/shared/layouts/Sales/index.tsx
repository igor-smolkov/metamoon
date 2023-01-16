import { FC, PropsWithChildren } from 'react';

import { Footer, Header } from 'shared/components';

import styles from './sales.module.scss';

type Props = {};

const Sales: FC<PropsWithChildren<Props>> = ({ children }) => (
  <div className={styles.root}>
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  </div>
);

export { Sales };
