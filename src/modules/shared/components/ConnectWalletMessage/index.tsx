import { FC, PropsWithChildren } from 'react';

import { ModalMessage } from 'shared/components';
import styles from './connectWalletMessage.module.scss';

const ConnectWalletMessage: FC<PropsWithChildren> = ({ children }) => (
  <ModalMessage title="Connect wallet">
    <div className={styles.contentWrapper}>
      <div className={styles.content}>{children}</div>
    </div>
  </ModalMessage>
);

export { ConnectWalletMessage };
