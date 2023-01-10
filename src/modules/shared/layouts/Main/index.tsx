import { FC, PropsWithChildren } from 'react';
import { Montserrat } from '@next/font/google';
import cn from 'classnames';

import { Footer, Header, Spaceship } from 'shared/components';

import styles from './main.module.scss';

const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'], weight: ['400', '500'], variable: '--font-main' });

type Props = {};

const Main: FC<PropsWithChildren<Props>> = ({ children }) => (
  <div className={cn(styles.root, montserrat.variable)}>
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>{children}</main>
      <div className={styles.spaceshipContainer}>
        <div className={styles.spaceship}>
          <Spaceship />
        </div>
      </div>
      <Footer />
    </div>
  </div>
);

export { Main };
