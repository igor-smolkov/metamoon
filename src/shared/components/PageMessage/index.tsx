import { FC, ReactNode } from 'react';
import cn from 'classnames';

import styles from './pageMessage.module.scss';

type Props = {
  title?: string;
  text?: string;
  titleContent?: ReactNode | null;
  textContent?: ReactNode | null;
  button?: ReactNode | null;
  isTitleBold?: boolean;
};

const PageMessage: FC<Props> = ({
  title = '',
  text = '',
  titleContent = null,
  textContent = null,
  button = null,
  isTitleBold = false,
}) => {
  const titleClassName = cn(styles.title, { [styles.titleBold]: isTitleBold });

  return (
    <section className={styles.root}>
      {title !== '' && <h1 className={titleClassName}>{title}</h1>}
      {titleContent !== null && <div className={titleClassName}>{titleContent}</div>}
      {text !== '' && <p className={styles.text}>{text}</p>}
      {textContent !== null && <div className={styles.text}>{textContent}</div>}
      {button !== null && <div className={styles.button}>{button}</div>}
    </section>
  );
};

export { PageMessage };
