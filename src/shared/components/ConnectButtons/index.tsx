import { FC } from 'react';
import NextImage from 'next/image';

import { Button } from '../Button';
import styles from './connectButtons.module.scss';

const ConnectButtons: FC = () => (
  <div className={styles.root}>
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
);

export { ConnectButtons };
