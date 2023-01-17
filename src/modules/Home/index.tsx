import Head from 'next/head';
import { useEffect, useState } from 'react';

import { Button, Logo, Modal, ToWhitelistForm, ConnectButtons } from 'shared/components';
import { NextPageWithLayout } from 'shared/types';

import { Main } from '../shared/layouts';
import { ConnectWalletMessage, NetworkMessage, ParticipatingMessage, ToWhitelistMessage } from '../shared/components';
import styles from './home.module.scss';

type StaticProps = {};

const Home: NextPageWithLayout<StaticProps> = () => {
  const [showConnectModal, setShowConnectModal] = useState(false);
  const [showToWhitelistModal, setShowToWhitelistModal] = useState(false);
  const [showParticipatingModal, setShowParticipatingModal] = useState(false);
  const [showNetworkModal, setShowNetworkModal] = useState(false);

  const handleToWhitelistFormSubmit = () => {
    setShowToWhitelistModal(false);
    setShowParticipatingModal(true);
  };

  useEffect(() => {
    setTimeout(() => setShowNetworkModal(true), 2000);
  }, []);

  return (
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
                <Logo fontSize={100} />
              </span>
            </span>
            taMoon
          </span>
        </h1>
        <p className={styles.text}>From the&nbsp;creators of the&nbsp;first Cardano NFT-marketplace</p>
        <div className={styles.buttons}>
          <Button onClick={() => setShowConnectModal(true)}>Connect wallet</Button>
          <Modal isOpen={showConnectModal} onClose={() => setShowConnectModal(false)}>
            <ConnectWalletMessage>
              <ConnectButtons />
            </ConnectWalletMessage>
          </Modal>
          <Button onClick={() => setShowToWhitelistModal(true)}>Get whitelisted for airdrop</Button>
          <Modal isOpen={showToWhitelistModal} onClose={() => setShowToWhitelistModal(false)}>
            <ToWhitelistMessage isExternal>
              <ToWhitelistForm onSubmit={handleToWhitelistFormSubmit} />
            </ToWhitelistMessage>
          </Modal>
          <Modal isOpen={showParticipatingModal} onClose={() => setShowParticipatingModal(false)}>
            <ParticipatingMessage />
          </Modal>
        </div>
        <Modal isOpen={showNetworkModal} onClose={() => setShowNetworkModal(false)}>
          <NetworkMessage />
        </Modal>
      </div>
    </>
  );
};

Home.getLayout = (page) => <Main>{page}</Main>;

export { Home, type StaticProps };
