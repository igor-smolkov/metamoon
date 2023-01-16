import { FC, PropsWithChildren, ReactNode, useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';

import { Button } from '../Button';
import styles from './popperButton.module.scss';

type Props = {
  buttonContent: ReactNode;
};

const PopperButton: FC<PropsWithChildren<Props>> = ({ buttonContent, children }) => {
  const [isShowPopper, setIsShowPopper] = useState(false);

  const handleButtonClick = () => setIsShowPopper(!isShowPopper);

  const handleClickAway = () => setIsShowPopper(false);

  return (
    <div className={styles.root}>
      <Button onClick={handleButtonClick}>{buttonContent}</Button>
      {isShowPopper && (
        <ClickAwayListener onClickAway={handleClickAway}>
          <div className={styles.popper}>{children}</div>
        </ClickAwayListener>
      )}
    </div>
  );
};

export { PopperButton };
