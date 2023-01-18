import { FC } from 'react';

import { animationPosFactor, gradientTransitionLength } from './constants';
import styles from './progressBar.module.scss';

type Props = {
  progress: number;
  label?: string;
};

const ProgressBar: FC<Props> = ({ progress, label = '' }) => {
  let startTransitionBP = (progress - gradientTransitionLength / 2) / animationPosFactor;
  let endTransitionBP = (progress + gradientTransitionLength / 2) / animationPosFactor;

  if (progress <= 0) {
    startTransitionBP = 0;
    endTransitionBP = 0;
  }

  if (progress >= 100) {
    startTransitionBP = 100 / animationPosFactor;
    endTransitionBP = 100 / animationPosFactor;
  }

  return (
    <div
      className={styles.root}
      style={{ backgroundImage: `linear-gradient(90deg, #6CFF47 ${startTransitionBP}%, #000 ${endTransitionBP}%)` }}
    >
      {label !== '' && <p className={styles.label}>{label}</p>}
    </div>
  );
};

export { ProgressBar };
