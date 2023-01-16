/* eslint-disable react/button-has-type */
import { FC, PropsWithChildren } from 'react';
import NextLink from 'next/link';
import cn from 'classnames';

import styles from './button.module.scss';

type Props = {
  type?: 'button' | 'submit';
  theme?: 'text' | 'group';
  collapse?: 'top' | 'bottom' | 'none';
  href?: string;
  onClick?: () => void;
};

const Button: FC<PropsWithChildren<Props>> = ({
  children,
  type = 'button',
  theme = 'text',
  collapse = 'none',
  href = '',
  onClick,
}) => {
  const className = cn(styles.root, {
    [styles.themeGroup]: theme === 'group',
    [styles.collapseTop]: collapse === 'top',
    [styles.collapseBottom]: collapse === 'bottom',
  });

  return href !== '' ? (
    <NextLink className={className} href={href}>
      {children}
    </NextLink>
  ) : (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export { Button };
