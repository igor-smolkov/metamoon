import { FC } from 'react';
import NextImage from 'next/image';

import { Button } from 'shared/components';
import styles from './connectWalletPanel.module.scss';

const ConnectWalletPanel: FC = () => (
  <section className={styles.root}>
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
