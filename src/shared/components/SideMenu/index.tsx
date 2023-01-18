import { FC } from 'react';

import { Link } from '../Link';
import { Label } from '../Label';
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
          <Label status={status} isAvailable={status === 'Available now'}>
            {label}
          </Label>
        </Link>
      </li>
    ))}
  </ul>
);

export { SideMenu };
