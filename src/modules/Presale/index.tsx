import Head from 'next/head';
import NextImage from 'next/image';
import { useState } from 'react';

import { Bill, Button, Counter, Label, Modal, PageMessage } from 'shared/components';
import { NextPageWithLayout } from 'shared/types';

import { Sales } from '../shared/layouts';
import { SwapTokensMessage } from '../shared/components';

const Presale: NextPageWithLayout = () => {
  const [amountNFT, setAmountNFT] = useState(2);
  const [status] = useState<'available' | 'finished' | 'soon'>('available');
  const [showUniswapModal, setShowUniswapModal] = useState(false);

  return (
    <>
      <Head>
        <title>Private Presale | To the MetaMoon</title>
      </Head>
      {status === 'soon' && (
        <PageMessage
          title="Private sale starts soon"
          text="You can buy ut to&nbsp;5&nbsp;NFTs for the&nbsp;lowest price&nbsp;of&nbsp;0.1&nbsp;Eth per&nbsp;NFT"
        >
          <Bill list={[{ label: 'Presale Price', amount: '0.1 ETH ($170)' }]} />
        </PageMessage>
      )}
      {status === 'available' && (
        <PageMessage
          titleContent={
            <Label status="5d 13h 12min 43sec" isAvailable semantic="h1">
              Be an early bird!
            </Label>
          }
          text="Choose the&nbsp;amount of&nbsp;tokens you want to buy&nbsp;and&nbsp;make a&nbsp;payment in any token."
          button={
            <>
              <Button onClick={() => setShowUniswapModal(true)}>MINT 2&nbsp;NFT</Button>
              <Modal isOpen={showUniswapModal} onClose={() => setShowUniswapModal(false)}>
                <SwapTokensMessage>
                  <NextImage src="/images/uniswap.png" width={486} height={389} alt="uniswap-mock" />
                </SwapTokensMessage>
              </Modal>
            </>
          }
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
      )}
      {status === 'finished' && <PageMessage title="Private sale is over!" text="You can buy NFTs on public sale." />}
    </>
  );
};

Presale.getLayout = (page) => <Sales>{page}</Sales>;

export { Presale };
