import { FC, PropsWithChildren } from 'react';
import NextLink from 'next/link';
import cn from 'classnames';

import styles from './link.module.scss';

type Props = {
  href: string;
  isExternal?: boolean;
  isHoverInverted?: boolean;
  isCurrent?: boolean;
  hoverType?: 'underline' | 'sepia' | 'rotate';
};

const Link: FC<PropsWithChildren<Props>> = ({
  href,
  children,
  isExternal = false,
  isHoverInverted = false,
  isCurrent = false,
  hoverType = 'underline',
}) => {
  const className = cn(styles.root, {
    [styles.typeUnderlineInverted]: hoverType === 'underline' && isHoverInverted,
    [styles.typeUnderlineCurrent]: hoverType === 'underline' && isCurrent,
    [styles.typeSepia]: hoverType === 'sepia',
    [styles.typeRotate]: hoverType === 'rotate',
  });

  return isCurrent ? (
    <span className={className}>{children}</span>
  ) : (
    <>
      {isExternal ? (
        <a className={className} href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ) : (
        <NextLink className={className} href={href}>
          {children}
        </NextLink>
      )}
    </>
  );
};

export { Link };
