import { FC } from 'react';

import styles from './list.module.scss';

type Props = {
  list: string[];
};

const List: FC<Props> = ({ list }) => (
  <ul className={styles.root}>
    {list.map((item) => (
      <li className={styles.item} key={item}>
        {item}
      </li>
    ))}
  </ul>
);

export { List };
