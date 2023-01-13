import { FC, HTMLInputTypeAttribute } from 'react';
import cn from 'classnames';

import styles from './textField.module.scss';

type Props = {
  type?: HTMLInputTypeAttribute | 'textarea';
  name?: string;
  placeholder?: string;
  value?: string;
};

const TextField: FC<Props> = ({ type = 'text', name = '', placeholder = '', value = '' }) => {
  const className = cn(styles.root, { [styles.textarea]: type === 'textarea' });

  return type === 'textarea' ? (
    <textarea className={className} placeholder={placeholder} value={value} name={name} />
  ) : (
    <input className={className} type={type} value={value} placeholder={placeholder} name={name} />
  );
};

export { TextField };
