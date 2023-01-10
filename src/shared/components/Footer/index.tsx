import { FC } from 'react';
import NextImage from 'next/image';

import { Link } from '../Link';
import styles from './footer.module.scss';

const Footer: FC = () => (
  <footer className={styles.root}>
    <div className={styles.content}>
      <Link href="https://instagram.com" isExternal hoverType="sepia">
        <NextImage src="/images/instagram.svg" width={45} height={45} alt="Instagram" />
      </Link>
      <Link href="https://telegram.com" isExternal hoverType="sepia">
        <NextImage src="/images/telegram.svg" width={40} height={40} alt="Telegram" />
      </Link>
      <Link href="https://linkedin.com" isExternal hoverType="sepia">
        <NextImage src="/images/linkedin.svg" width={40} height={40} alt="LinkedIn" />
      </Link>
      <Link href="https://facebook.com" isExternal hoverType="sepia">
        <NextImage src="/images/facebook.svg" width={40} height={40} alt="Facebook" />
      </Link>
    </div>
  </footer>
);

export { Footer };
