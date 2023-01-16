import { FC, PropsWithChildren } from 'react';

import { Footer, Header, ProgressBar, Ticker } from 'shared/components';

import styles from './sales.module.scss';

type Props = {};

const Sales: FC<PropsWithChildren<Props>> = ({ children }) => (
  <div className={styles.root}>
    <div className={styles.page}>
      <div className={styles.contentWrapper}>
        <Header accAddress="0x1f...as59t3" />
        <div className={styles.progressBar}>
          <ProgressBar progress={27} label="27/100 NFT are already minted" />
        </div>
        <main className={styles.main}>{children}</main>
      </div>
      <div className={styles.ticker}>
        <Ticker
          list={[
            '0xa5...87c4 claimed $1.000 discount',
            '0xv8...12tk claimed free 1-week period',
            '0x01...ts5u claimed free project prototyping',
            '0x6g...a9cs claimed free junior de',
          ]}
        />
      </div>
      <div className={styles.contentWrapper}>
        <Footer />
      </div>
    </div>
  </div>
);

export { Sales };
