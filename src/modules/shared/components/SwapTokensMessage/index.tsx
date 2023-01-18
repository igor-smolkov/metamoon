import { FC, PropsWithChildren } from 'react';

import { ModalMessage } from 'shared/components';
import styles from './swapTokensMessage.module.scss';

const SwapTokensMessage: FC<PropsWithChildren> = ({ children }) => (
  <ModalMessage title="Lack of ETH?" text="Swap your tokens and mint NFT using&nbsp;UniSwap">
    <div className={styles.contentWrapper}>
      <div className={styles.content}>{children}</div>
    </div>
  </ModalMessage>
);

export { SwapTokensMessage };
