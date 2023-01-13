import { FC } from 'react';

import { Link } from 'shared/components';

import styles from './participatingMessage.module.scss';

const ParticipatingMessage: FC = () => (
  <section className={styles.root}>
    <h2 className={styles.title}>Thanks for participating</h2>
    <div className={styles.text}>
      <p>Our manager will contact you to&nbsp;discuss the&nbsp;details.</p>
      <p>You will be whitelisted within 2&nbsp;working days.</p>
      <p>
        To&nbsp;get more information about airdrop, presale and public sale please check our{' '}
        <Link href="/mock-address/change-me" isHoverInverted>
          roadmap
        </Link>
        .
      </p>
    </div>
  </section>
);

export { ParticipatingMessage };
