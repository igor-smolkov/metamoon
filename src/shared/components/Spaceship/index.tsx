import { FC } from 'react';

import styles from './spaceship.module.scss';

const Spaceship: FC = () => (
  <div className={styles.root}>
    <div className={styles.fire} />
    <div className={styles.ship} />
    <div className={styles.pilot} />
  </div>
);

export { Spaceship };
