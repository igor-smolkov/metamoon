import { AppPropsWithLayout } from 'shared/types';
import { StoreProvider, useStore } from 'store/createStore';

import './_app.scss';

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const store = useStore();
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <StoreProvider store={store}>{getLayout(<Component {...pageProps} />)}</StoreProvider>
    </>
  );
};

export default MyApp;
