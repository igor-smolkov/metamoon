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
      <TextField placeholder="Contacts" name="contacts" />
      <TextField placeholder="Wallet address" name="wallet-address" />
      <TextField placeholder="Project info" type="textarea" name="project-info" />
      <Button type="submit">Send</Button>
    </form>
  );
};

export { ToWhitelistForm };
