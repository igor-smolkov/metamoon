import Head from 'next/head';
import { Button, PageMessage } from 'shared/components';

import { NextPageWithLayout } from 'shared/types';

import { Sales } from '../shared';
// import styles from './airDrop.module.scss';

const AirDrop: NextPageWithLayout = () => {
  const isWhitelisted = false;

  return (
    <>
      <Head>
        <title>AirDrop | To the MetaMoon</title>
      </Head>
      {isWhitelisted ? (
        <PageMessage
          title="Congratulations!"
          textContent={
            <>
              <p>Your wallet has been whitelisted!</p>
              <p>Claim your NFT now!</p>
            </>
          }
          button={<Button>Claim NFT</Button>}
        />
      ) : (
        <PageMessage
          title="You&rsquo;re not whitelisted yet :("
          textContent={
            <>
              <p>To participate in AirDrop please send us an information about your project</p>
            </>
          }
          button={<Button>Get whitelisted</Button>}
        />
      )}
    </>
  );
};

AirDrop.getLayout = (page) => <Sales>{page}</Sales>;

export { AirDrop };
