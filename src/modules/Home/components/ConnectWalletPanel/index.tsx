import { FC } from 'react';

import { Button } from 'shared/components';
import styles from './connectWalletPanel.module.scss';

const ConnectWalletPanel: FC = () => (
  <section className={styles.root}>
    <h2 className={styles.title}>Connect wallet</h2>
    <div className={styles.buttons}>
      <Button>Metamask</Button>
      <Button>WalletConnect</Button>
      <Button>Coinbase Wallet</Button>
    </div>
  </section>
);

export { ConnectWalletPanel };
