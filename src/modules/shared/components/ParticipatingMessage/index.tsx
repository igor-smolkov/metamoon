import { FC } from 'react';

import { Link, ModalMessage } from 'shared/components';

const ParticipatingMessage: FC = () => (
  <ModalMessage
    title="Thanks for participating"
    textContent={
      <>
        <p>Our manager will contact you to&nbsp;discuss the&nbsp;details.</p>
        <p>You will be whitelisted within 2&nbsp;working days.</p>
        <p>
          To&nbsp;get more information about airdrop, presale and public sale please check our{' '}
          <Link href="/mock-address/change-me" isHoverInverted>
            roadmap
          </Link>
          .
        </p>
      </>
    }
  />
);

export { ParticipatingMessage };
