import { FC, ReactNode } from 'react';

import styles from './bill.module.scss';

type Props = {
  list: {
    label: string;
    amount?: string;
    amountContent?: ReactNode;
  }[];
};

const Bill: FC<Props> = ({ list }) => (
  <ul className={styles.root}>
    {list.map(({ label, amount, amountContent }) => (
      <li className={styles.item}>
        <p>{label}</p>
        {amount && <p>{amount}</p>}
        {amountContent && <div>{amountContent}</div>}
      </li>
    ))}
  </ul>
);

export { Bill };
