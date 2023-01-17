import Head from 'next/head';
import { useState } from 'react';
import { ToWhitelistForm, Button, Modal, PageMessage } from 'shared/components';

import { NextPageWithLayout } from 'shared/types';

import { Sales } from '../shared/layouts';
import { ParticipatingMessage, ToWhitelistMessage } from '../shared/components';

const AirDrop: NextPageWithLayout = () => {
  const [showToWhitelistModal, setShowToWhitelistModal] = useState(false);
  const [showParticipatingModal, setShowParticipatingModal] = useState(false);

  const isWhitelisted = false;

  const handleToWhitelistFormSubmit = () => {
    setShowToWhitelistModal(false);
    setShowParticipatingModal(true);
  };

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
          button={
            <>
              <Button onClick={() => setShowToWhitelistModal(true)}>Get whitelisted</Button>
              <Modal isOpen={showToWhitelistModal} onClose={() => setShowToWhitelistModal(false)}>
                <ToWhitelistMessage>
                  <ToWhitelistForm onSubmit={handleToWhitelistFormSubmit} />
                </ToWhitelistMessage>
              </Modal>
              <Modal isOpen={showParticipatingModal} onClose={() => setShowParticipatingModal(false)}>
                <ParticipatingMessage />
              </Modal>
            </>
          }
        />
      )}
    </>
  );
};

AirDrop.getLayout = (page) => <Sales>{page}</Sales>;

export { AirDrop };
