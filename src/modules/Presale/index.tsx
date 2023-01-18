import Head from 'next/head';

import { Button, Label, PageMessage } from 'shared/components';
import { NextPageWithLayout } from 'shared/types';

import { Sales } from '../shared/layouts';

const Presale: NextPageWithLayout = () => (
  <>
    <Head>
      <title>Private Presale | To the MetaMoon</title>
    </Head>
    <PageMessage
      titleContent={
        <Label status="5d 13h 12min 43sec" isAvailable semantic="h1">
          Be an early bird!
        </Label>
      }
      text="Choose the amount of tokens you want to buy&nbsp;and&nbsp;make a payment in any token."
      button={<Button>MINT 2 NFT</Button>}
    />
  </>
);

Presale.getLayout = (page) => <Sales>{page}</Sales>;

export { Presale };
