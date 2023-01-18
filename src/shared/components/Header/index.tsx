import { FC } from 'react';

import { Logo } from '../svg';
import { Link } from '../Link';
import { Button } from '../Button';
import { PopperButton } from '../PopperButton';
import styles from './header.module.scss';

type Props = {
  accAddress?: string;
};

const Header: FC<Props> = ({ accAddress = '' }) => (
  <header className={styles.root}>
    <Link href="/" hoverType="rotate">
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
        {accAddress !== '' ? (
          <PopperButton buttonContent={accAddress}>
            <Button href="/mock-address/change-me" collapse="bottom">
              Observe my NFT
            </Button>
            <Button collapse="top">Disconnect</Button>
          </PopperButton>
        ) : (
          <Button href="/airdrop">Connect wallet</Button>
        )}
      </div>
    </div>
  </header>
);

export { Header };
