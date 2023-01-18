import { FC, HTMLInputTypeAttribute, ChangeEvent } from 'react';
import cn from 'classnames';

import styles from './textField.module.scss';

type Props = {
  type?: HTMLInputTypeAttribute | 'textarea';
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent) => void;
};

const TextField: FC<Props> = ({ type = 'text', name = '', placeholder = '', value = '', onChange }) => {
  const className = cn(styles.root, { [styles.textarea]: type === 'textarea' });

  return type === 'textarea' ? (
    <textarea className={className} placeholder={placeholder} value={value} name={name} onChange={onChange} />
  ) : (
    <input className={className} type={type} value={value} placeholder={placeholder} name={name} onChange={onChange} />
  );
};

export { TextField };
