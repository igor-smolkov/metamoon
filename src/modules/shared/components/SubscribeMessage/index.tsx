import { FC, PropsWithChildren } from 'react';

import { ModalMessage } from 'shared/components';
import styles from './subscribeMessage.module.scss';

const SubscribeMessage: FC<PropsWithChildren> = ({ children }) => (
  <ModalMessage title="Stay informed!" text="Share your contacts to receive our updates. ">
    <div className={styles.contentWrapper}>
      <div className={styles.content}>{children}</div>
    </div>
  </ModalMessage>
);

export { SubscribeMessage };
