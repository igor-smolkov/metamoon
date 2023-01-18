import Head from 'next/head';
import { useState } from 'react';

import { Bill, Button, Counter, Label, PageMessage } from 'shared/components';
import { NextPageWithLayout } from 'shared/types';

import { Sales } from '../shared/layouts';

const Presale: NextPageWithLayout = () => {
  const [amountNFT, setAmountNFT] = useState(2);

  return (
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
      >
        <Bill
          list={[
            { label: 'Your balance', amount: '1 ETH ($1700)' },
            { label: 'Presale Price', amount: '0.2 ETH ($340)' },
            {
              label: 'Amount of NFT',
              amountContent: (
                <Counter
                  value={amountNFT}
                  max={5}
                  onDecrement={() => setAmountNFT((v) => v - 1)}
                  onIncrement={() => setAmountNFT((v) => v + 1)}
                />
              ),
            },
            { label: 'Total Cost', amount: '0.2 ETH ($340)' },
          ]}
        />
      </PageMessage>
    </>
  );
};

Presale.getLayout = (page) => <Sales>{page}</Sales>;

export { Presale };
