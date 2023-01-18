import Head from 'next/head';
import NextImage from 'next/image';
import { useState } from 'react';

import { Bill, Button, Counter, Modal, PageMessage, SubscribeForm } from 'shared/components';
import { NextPageWithLayout } from 'shared/types';

import { Sales } from '../shared/layouts';
import { SubscribeMessage, SwapTokensMessage } from '../shared/components';

const PublicSale: NextPageWithLayout = () => {
  const [amountNFT, setAmountNFT] = useState(2);
  const [status] = useState<'available' | 'soon'>('available');
  const [showUniswapModal, setShowUniswapModal] = useState(false);
  const [showSubscribeModal, setSubscribeModal] = useState(false);

  return (
    <>
      <Head>
        <title>Public Sale | To the MetaMoon</title>
      </Head>
      {status === 'soon' && (
        <PageMessage
          title="Subscribe to our news!"
          text="We&rsquo;ll send you a notification when public sale is available to participate"
          button={
            <>
              <Button onClick={() => setSubscribeModal(true)}>Subscribe</Button>
              <Modal isOpen={showSubscribeModal} onClose={() => setSubscribeModal(false)}>
                <SubscribeMessage>
                  <SubscribeForm />
                </SubscribeMessage>
              </Modal>
            </>
          }
        >
          <Bill list={[{ label: 'Public Price', amount: '0.5 ETH ($850)' }]} />
        </PageMessage>
      )}
      {status === 'available' && (
        <PageMessage
          title="Mint NFTs now!"
          text="You can mint an unlimited amount of NFTs for the market price"
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
              { label: 'Presale Price', amount: '0.5 ETH ($850)' },
              {
                label: 'Amount of NFT',
                amountContent: (
                  <Counter
                    value={amountNFT}
                    max={3}
                    onDecrement={() => setAmountNFT((v) => v - 1)}
                    onIncrement={() => setAmountNFT((v) => v + 1)}
                  />
                ),
              },
              { label: 'Total Cost', amount: '1 ETH ($1700)' },
            ]}
          />
        </PageMessage>
      )}
    </>
  );
};

PublicSale.getLayout = (page) => <Sales>{page}</Sales>;

export { PublicSale };
