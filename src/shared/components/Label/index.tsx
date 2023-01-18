import { FC, PropsWithChildren } from 'react';
import cn from 'classnames';

import styles from './label.module.scss';

type Props = {
  status?: string;
  isAvailable?: boolean;
  semantic?: 'h1' | 'none';
};

const Label: FC<PropsWithChildren<Props>> = ({ status = '', isAvailable = false, semantic = 'none', children }) => {
  const content = (
    <>
      {children}
      {status !== '' && <span className={cn(styles.status, { [styles.statusAvailable]: isAvailable })}>{status}</span>}
    </>
  );

  switch (semantic) {
    case 'h1':
      return <h1 className={styles.root}>{content}</h1>;
    default:
      return <span className={styles.root}>{content}</span>;
  }
};

export { Label };
