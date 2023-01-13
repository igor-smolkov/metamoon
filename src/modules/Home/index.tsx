import Head from 'next/head';
import { FormEvent, useEffect, useState } from 'react';

import { Button, Logo, Modal } from 'shared/components';
import { NextPageWithLayout } from 'shared/types';

import { Main } from '../shared';
import { AirDropForm, ConnectWalletPanel, NetworkMessage, ParticipatingMessage } from './components';
import styles from './home.module.scss';

type StaticProps = {};

const Home: NextPageWithLayout<StaticProps> = () => {
  const [showConnectModal, setShowConnectModal] = useState(false);
  const [showAirDropModal, setShowAirDropModal] = useState(false);
  const [showParticipatingModal, setShowParticipatingModal] = useState(false);
  const [showNetworkModal, setShowNetworkModal] = useState(false);

  const handleAirDropFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    setShowAirDropModal(false);
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
            <ConnectWalletPanel />
          </Modal>
          <Button onClick={() => setShowAirDropModal(true)}>Get whitelisted for airdrop</Button>
          <Modal isOpen={showAirDropModal} onClose={() => setShowAirDropModal(false)}>
            <AirDropForm onSubmit={handleAirDropFormSubmit} />
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
