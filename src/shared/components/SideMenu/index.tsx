import { FC } from 'react';
import cn from 'classnames';

import { Link } from '../Link';
import styles from './sideMenu.module.scss';

type Props = {
  links: {
    label: string;
    href: string;
    status: 'Available now' | 'Soon' | 'Finished';
    isCurrent: boolean;
  }[];
};

const SideMenu: FC<Props> = ({ links }) => (
  <ul className={styles.root}>
    {links.map(({ label, href, status, isCurrent }) => (
      <li key={href} className={styles.item}>
        <Link href={href} isCurrent={isCurrent}>
          {label}
          <span className={cn(styles.status, { [styles.statusAvailable]: status === 'Available now' })}>{status}</span>
        </Link>
      </li>
    ))}
  </ul>
);

export { SideMenu };
