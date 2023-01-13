import { FC, PropsWithChildren } from 'react';

import { Footer, Header, Spaceship } from 'shared/components';

import styles from './main.module.scss';

type Props = {};

const Main: FC<PropsWithChildren<Props>> = ({ children }) => (
  <div className={styles.root}>
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
