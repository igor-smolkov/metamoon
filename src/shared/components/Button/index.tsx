import { FC, PropsWithChildren } from 'react';

import styles from './button.module.scss';

const Button: FC<PropsWithChildren> = ({ children }) => (
  <button className={styles.root} type="button">
    {children}
  </button>
);

export { Button };
