import Head from 'next/head';

import { NextPageWithLayout } from 'shared/types';

import { Main } from '../shared';
import styles from './home.module.scss';

type StaticProps = {};

const Home: NextPageWithLayout<StaticProps> = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <div className={styles.root}>Home page</div>
  </>
);

Home.getLayout = (page) => <Main>{page}</Main>;

export { Home, type StaticProps };
