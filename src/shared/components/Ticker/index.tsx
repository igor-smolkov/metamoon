import { FC } from 'react';
import { List } from './List';

import styles from './ticker.module.scss';

type Props = {
  list: string[];
};

const Ticker: FC<Props> = ({ list }) => {
  const listItemCount = list.length;

  let tickerItemCount = listItemCount > 8 ? 2 : 3;
  switch (listItemCount) {
    case 1:
      tickerItemCount = 10;
      break;
    case 2:
      tickerItemCount = 7;
      break;
    case 3:
      tickerItemCount = 4;
      break;
    default:
  }

  const tickerKeys = Array.from({ length: tickerItemCount }, (_, i) => i);

  const translateX = 100 / tickerItemCount;
  const duration = listItemCount * 10;

  return (
    <div className={styles.root}>
      <div
        className={styles.ticker}
        style={{ transform: `translateX(-${translateX}%)`, animationDuration: `${duration}s` }}
      >
        {tickerKeys.map((key) => (
          <div className={styles.tickerItem} key={key}>
            <List list={list} />
          </div>
        ))}
      </div>
    </div>
  );
};

export { Ticker };
