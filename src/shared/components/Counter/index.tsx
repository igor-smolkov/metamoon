import { FC } from 'react';

import { ArrowDown, ArrowUp } from '../svg';
import styles from './counter.module.scss';

type Props = {
  value: number;
  max: number;
  min?: number;
  onDecrement?: () => void;
  onIncrement?: () => void;
};

const Counter: FC<Props> = ({ value, max, min = 1, onDecrement, onIncrement }) => (
  <div className={styles.root}>
    <button className={styles.button} type="button" disabled={value <= min} onClick={onDecrement}>
      <ArrowDown />
    </button>
    <div className={styles.value}>
      {value}/{max}
    </div>
    <button className={styles.button} type="button" disabled={value >= max} onClick={onIncrement}>
      <ArrowUp />
    </button>
  </div>
);

export { Counter };
