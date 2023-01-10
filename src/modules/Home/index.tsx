import Head from 'next/head';

import { Button, Logo } from 'shared/components';
import { NextPageWithLayout } from 'shared/types';

import { Main } from '../shared';
import styles from './home.module.scss';

type StaticProps = {};

const Home: NextPageWithLayout<StaticProps> = () => (
  <>
    <Head>
      <title>To the MetaMoon</title>
    </Head>
    <div className={styles.root}>
      <h1 className={styles.title}>
        To&nbsp;the{' '}
        <span className={styles.projectName}>
          M
          <span className={styles.logoContainer}>
            e
            <span className={styles.logo}>
              <Logo fontSize={90} />
            </span>
          </span>
          taMoon
        </span>
      </h1>
      <p className={styles.text}>From the&nbsp;creators of the&nbsp;first Cardano NFT-marketplace</p>
      <div className={styles.buttons}>
        <Button>Connect wallet</Button>
        <Button>Get whitelisted for airdrop</Button>
      </div>
    </div>
  </>
);

Home.getLayout = (page) => <Main>{page}</Main>;

export { Home, type StaticProps };
