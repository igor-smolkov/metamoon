import { FC, FormEvent } from 'react';

import { Button, TextField } from 'shared/components';
import styles from './airDropForm.module.scss';

type Props = {
  onSubmit?: (event: FormEvent) => void;
};

const AirDropForm: FC<Props> = ({ onSubmit }) => (
  <section className={styles.root}>
    <h2 className={styles.title}>To get whitelisted for an AirDrop</h2>
    <p className={styles.text}>send us an information about your project you want us to participate in</p>
    <form className={styles.form} onSubmit={onSubmit}>
      <TextField placeholder="Contacts" name="contacts" />
      <TextField placeholder="Wallet address" name="wallet-address" />
      <TextField placeholder="Project info" type="textarea" name="project-info" />
      <Button type="submit">Send</Button>
    </form>
  </section>
);

export { AirDropForm };
