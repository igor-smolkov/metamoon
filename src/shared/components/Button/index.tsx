/* eslint-disable react/button-has-type */
import { FC, PropsWithChildren } from 'react';
import cn from 'classnames';

import styles from './button.module.scss';

type Props = {
  type?: 'button' | 'submit';
  theme?: 'text' | 'group';
  onClick?: () => void;
};

const Button: FC<PropsWithChildren<Props>> = ({ children, type = 'button', theme = 'text', onClick }) => (
  <button className={cn(styles.root, { [styles.themeGroup]: theme === 'group' })} type={type} onClick={onClick}>
    {children}
  </button>
);

export { Button };
