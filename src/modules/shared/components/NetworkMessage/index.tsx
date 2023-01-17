import { FC } from 'react';

import { Button, ModalMessage } from 'shared/components';

const NetworkMessage: FC = () => (
  <ModalMessage
    title="Switch the network"
    textContent={
      <>
        <p>
          It&nbsp;seems like your network is not&nbsp;Goerli. Please switch the&nbsp;network using your wallet&nbsp; or
          allow our system to&nbsp;do it.
        </p>
      </>
    }
    button={<Button>Switch to Goerli</Button>}
  />
);

export { NetworkMessage };
