import { FC, PropsWithChildren } from 'react';
import NextLink from 'next/link';

import styles from './link.module.scss';

type Props = {
  href: string;
  isExternal?: boolean;
};

const Link: FC<PropsWithChildren<Props>> = ({ href, children, isExternal = false }) =>
  isExternal ? (
    <a className={styles.root} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <NextLink className={styles.root} href={href}>
      {children}
    </NextLink>
  );

export { Link };
