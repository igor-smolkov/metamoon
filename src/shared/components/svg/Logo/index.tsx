/* eslint-disable max-len */
import { FC } from 'react';

type Props = {
  fontSize?: number | null;
};

const Logo: FC<Props> = ({ fontSize = null }) => {
  const sizeFactor = 0.7;
  const ratioFactor = 1.065;

  return (
    <svg
      width={fontSize !== null ? fontSize * sizeFactor : 92}
      height={fontSize !== null ? fontSize * sizeFactor * ratioFactor : 98}
      viewBox="0 0 92 98"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M75 44.5165C72.5952 53.0377 66.2758 60.3417 56.7127 65.7643C45.1366 72.3489 33.5043 73.5662 23.6057 70.1356L16 40.9198L50.8968 21L59.0615 28.9679L21.6484 50.3264C28.583 58.239 39.3764 59.6223 50.058 53.5357C56.9923 49.6071 61.1307 44.3505 62.9203 37.3785C63.3118 35.9952 63.4796 34.5012 63.5355 33.2839L75 44.5165Z"
        fill="#FFA300"
      />
      <path
        d="M92 62.1931C82.3169 83.3241 61.0361 98 36.4184 98C34.7225 98 32.9719 97.9448 31.3307 97.7793L24 69.1448L71.6492 42L92 62.1931Z"
        fill="url(#paint0_linear_8_62)"
      />
      <path
        d="M21.2534 3.7405L26.0171 11.9681C27.605 12.1326 29.1381 12.9005 30.1237 14.2718C37.7894 12.1326 45.4551 14.7106 50.4378 21.2927L58.4317 29.1912L69 23.0479C68.3429 21.6218 67.4663 19.8666 66.8098 18.7147C56.5706 0.888273 38.1179 -4.43223 21.2534 3.7405ZM5.1007 53.9836C9.64536 61.8821 16.1612 67.3672 23.7721 70L16.3255 41.0389C13.3139 33.2501 14.8471 25.4613 20.4321 19.9763C19.7203 18.4405 19.7203 16.6852 20.4321 15.2043L15.6684 6.97669C-0.0462678 17.7823 -4.64568 37.0348 5.1007 53.9836Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_8_62"
          x1="48.9078"
          y1="56.9181"
          x2="63.3211"
          y2="82.5277"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFA300" stopOpacity="0.8" />
          <stop offset="1" stopColor="#FFA300" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export { Logo };
