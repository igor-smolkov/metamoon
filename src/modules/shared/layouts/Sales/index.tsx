import { FC, PropsWithChildren } from 'react';

import { Footer, Header, ProgressBar } from 'shared/components';

import styles from './sales.module.scss';

type Props = {};

const Sales: FC<PropsWithChildren<Props>> = ({ children }) => (
  <div className={styles.root}>
    <div className={styles.page}>
      <Header accAddress="0x1f...as59t3" />
      <div className={styles.progressBar}>
        <ProgressBar progress={60} label="27/100 NFT are already minted" />
      </div>
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  </div>
);

export { Sales };
