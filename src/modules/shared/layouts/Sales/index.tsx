import { useRouter } from 'next/router';
import { FC, PropsWithChildren } from 'react';

import { Box, Footer, Header, ProgressBar, SideMenu, Ticker } from 'shared/components';
import { routes } from 'shared/constants';

import styles from './sales.module.scss';

type Props = {};

const Sales: FC<PropsWithChildren<Props>> = ({ children }) => {
  const { route } = useRouter();

  return (
    <div className={styles.root}>
      <div className={styles.contentWrapper}>
        <Header accAddress="0x1f...as59t3" />
        <div className={styles.progressBar}>
          <ProgressBar progress={27} label="27/100 NFT are already minted" />
        </div>
        <div className={styles.salesWrapper}>
          <SideMenu
            links={[
              {
                label: 'AirDrop',
                href: routes.airdrop,
                status: 'Available now',
                isCurrent: route === routes.airdrop,
              },
              {
                label: 'Private Presale',
                href: routes.presale,
                status: 'Available now',
                isCurrent: route === routes.presale,
              },
              {
                label: 'Public Sale',
                href: routes.publicSale,
                status: 'Soon',
                isCurrent: route === routes.publicSale,
              },
            ]}
          />
          <div className={styles.boxWrapper}>
            <main className={styles.main}>{children}</main>
            <Box />
          </div>
        </div>
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
  );
};

export { Sales };
