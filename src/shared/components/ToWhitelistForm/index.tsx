import { FC, FormEvent } from 'react';

import { Button } from '../Button';
import { TextField } from '../TextField';
import styles from './toWhitelistForm.module.scss';

type Props = {
  onSubmit?: (event: FormEvent) => void;
};

const ToWhitelistForm: FC<Props> = ({ onSubmit }) => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit?.(event);
  };

  return (
    <form className={styles.root} onSubmit={handleSubmit}>
      <TextField placeholder="Contacts" name="contacts" onChange={() => {}} />
      <TextField placeholder="Wallet address" name="wallet-address" onChange={() => {}} />
      <TextField placeholder="Project info" type="textarea" name="project-info" onChange={() => {}} />
      <Button type="submit">Send</Button>
    </form>
  );
};

export { ToWhitelistForm };
