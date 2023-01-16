import Head from 'next/head';

import { NextPageWithLayout } from 'shared/types';

import { Sales } from '../shared';
import styles from './airDrop.module.scss';

const AirDrop: NextPageWithLayout = () => (
  <>
    <Head>
      <title>AirDrop | To the MetaMoon</title>
    </Head>
    <div className={styles.root}>AirDrop page</div>
  </>
);

AirDrop.getLayout = (page) => <Sales>{page}</Sales>;

export { AirDrop };
