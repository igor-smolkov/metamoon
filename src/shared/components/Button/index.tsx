import { FC, PropsWithChildren } from 'react';
import cn from 'classnames';

import styles from './button.module.scss';

type Props = {
  theme?: 'text' | 'group';
  onClick?: () => void;
};

const Button: FC<PropsWithChildren<Props>> = ({ children, theme = 'text', onClick }) => (
  <button className={cn(styles.root, { [styles.themeGroup]: theme === 'group' })} type="button" onClick={onClick}>
    {children}
  </button>
);

export { Button };
