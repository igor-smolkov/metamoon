import { FC, FormEvent } from 'react';

import { Button } from '../Button';
import { TextField } from '../TextField';
import styles from './subscribeForm.module.scss';

type Props = {
  onSubmit?: (event: FormEvent) => void;
};

const SubscribeForm: FC<Props> = ({ onSubmit }) => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit?.(event);
  };

  return (
    <form className={styles.root} onSubmit={handleSubmit}>
      <TextField placeholder="Email" name="email" type="email" onChange={() => {}} />
      <Button type="submit">Subscribe</Button>
    </form>
  );
};

export { SubscribeForm };
