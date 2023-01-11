import { FC } from 'react';
import NextImage from 'next/image';
import { Montserrat } from '@next/font/google';
import cn from 'classnames';

import { Button } from 'shared/components';
import styles from './connectWalletPanel.module.scss';

const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'], weight: ['400', '500'], variable: '--font-main' });

const ConnectWalletPanel: FC = () => (
  <section className={cn(styles.root, montserrat.variable)}>
    <h2 className={styles.title}>Connect wallet</h2>
    <div className={styles.buttons}>
      <Button theme="group">
        <NextImage src="/images/metamask.svg" width={24} height={22} alt="Metamask" /> Metamask
      </Button>
      <Button theme="group">
        <NextImage src="/images/metamask.svg" width={24} height={22} alt="Metamask" /> WalletConnect
      </Button>
      <Button theme="group">
        <NextImage src="/images/metamask.svg" width={24} height={22} alt="Metamask" /> Coinbase Wallet
      </Button>
    </div>
  </section>
);

export { ConnectWalletPanel };
