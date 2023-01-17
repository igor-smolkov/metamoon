import { FC, PropsWithChildren } from 'react';

import { ModalMessage } from 'shared/components';
import styles from './toWhitelistMessage.module.scss';

type Props = {
  isExternal?: boolean;
};

const ToWhitelistMessage: FC<PropsWithChildren<Props>> = ({ children, isExternal = false }) => (
  <ModalMessage
    title={isExternal ? 'To get whitelisted for an AirDrop' : 'To get whitelisted'}
    textContent={
      <>
        <p>send us an information about your project you want us to participate in</p>
      </>
    }
  >
    <div className={styles.contentWrapper}>
      <div className={styles.content}>{children}</div>
    </div>
  </ModalMessage>
);

export { ToWhitelistMessage };
