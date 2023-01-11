import { FC, PropsWithChildren } from 'react';

import styles from './button.module.scss';

type Props = {
  onClick?: () => void;
};

const Button: FC<PropsWithChildren<Props>> = ({ children, onClick }) => (
  <button className={styles.root} type="button" onClick={onClick}>
    {children}
  </button>
);

export { Button };
