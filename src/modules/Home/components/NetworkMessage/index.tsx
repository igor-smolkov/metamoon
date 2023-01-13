import { FC } from 'react';

import { Button } from 'shared/components';

import styles from './networkMessage.module.scss';

const NetworkMessage: FC = () => (
  <section className={styles.root}>
    <h2 className={styles.title}>Switch the network</h2>
    <p className={styles.text}>
      It&nbsp;seems like your network is not&nbsp;Goerli. Please switch the&nbsp;network using your wallet or allow our
      system to&nbsp;do it.
    </p>
    <div className={styles.button}>
      <Button>Switch to Goerli</Button>
    </div>
  </section>
);

export { NetworkMessage };
