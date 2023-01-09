import { FC } from 'react';

import { Logo } from '../svg';
import { Link } from '../Link';
import { Button } from '../Button';
import styles from './header.module.scss';

const Header: FC = () => (
  <header className={styles.root}>
    <Link href="/">
      <Logo />
    </Link>
    <div className={styles.content}>
      <nav className={styles.navigation}>
        <Link href="/mock-address/change-me">About&nbsp;us</Link>
        <Link href="/mock-address/change-me">Roadmap</Link>
        <Link href="/mock-address/change-me">Team</Link>
        <Link href="/mock-address/change-me">Community</Link>
      </nav>
      <div className={styles.button}>
        <Button>Connect wallet</Button>
      </div>
    </div>
  </header>
);

export { Header };
