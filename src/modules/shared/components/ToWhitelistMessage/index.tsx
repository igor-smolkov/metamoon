import { FC, PropsWithChildren } from 'react';

import { ModalMessage } from 'shared/components';
import styles from './toWhitelistMessage.module.scss';

type Props = {
  isExternal?: boolean;
};

const ToWhitelistMessage: FC<PropsWithChildren<Props>> = ({ children, isExternal = false }) => (
  <ModalMessage
    title={isExternal ? 'To get whitelisted for an AirDrop' : 'To get whitelisted'}
    text="send us an information about your project you want us to participate in"
  >
    <div className={styles.contentWrapper}>
      <div className={styles.content}>{children}</div>
    </div>
  </ModalMessage>
);

export { ToWhitelistMessage };
