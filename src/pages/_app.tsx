import { globalCss } from '@stitches/react';
import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';
import { reset } from 'stitches-reset';

import { globalStyles } from '../styles/globalStyles';

const MyApp = ({ Component, pageProps }: AppProps) => {
  globalCss(reset)();
  globalCss(globalStyles)();

  return <Component {...pageProps} />;
};

export default appWithTranslation(MyApp);
