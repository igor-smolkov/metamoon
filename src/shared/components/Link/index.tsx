import { FC, PropsWithChildren } from 'react';
import NextLink from 'next/link';
import cn from 'classnames';

import styles from './link.module.scss';

type Props = {
  href: string;
  isExternal?: boolean;
  isHoverInverted?: boolean;
  hoverType?: 'underline' | 'sepia' | 'rotate';
};

const Link: FC<PropsWithChildren<Props>> = ({
  href,
  children,
  isExternal = false,
  isHoverInverted = false,
  hoverType = 'underline',
}) => {
  const className = cn(styles.root, {
    [styles.typeUnderlineInverted]: hoverType === 'underline' && isHoverInverted,
    [styles.typeSepia]: hoverType === 'sepia' && !isHoverInverted,
    [styles.typeRotate]: hoverType === 'rotate' && !isHoverInverted,
  });

  return isExternal ? (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <NextLink className={className} href={href}>
      {children}
    </NextLink>
  );
};

export { Link };
