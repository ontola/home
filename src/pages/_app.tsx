import { globalCss } from '@stitches/react';
import { AppProps } from 'next/app';
import { reset } from 'stitches-reset';

import { globalStyles } from '../styles/globalStyles';

const MyApp = ({ Component, pageProps }: AppProps) => {
  globalCss(reset)();
  globalCss(globalStyles)();

  return <Component {...pageProps} />;
};

export default MyApp;
