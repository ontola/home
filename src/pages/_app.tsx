import { useEffect } from 'react';

import { init } from '@socialgouv/matomo-next';
import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';
import { reset } from 'stitches-reset';

import { globalCss } from '../../stitches.config';
import { globalStyles } from '../styles/globalStyles';

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL as string;
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID as string;

const MyApp = ({ Component, pageProps }: AppProps) => {
  globalCss(reset)();
  globalCss(globalStyles)();

  // https://github.com/SocialGouv/matomo-next
  useEffect(() => {
    init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
  }, []);

  return <Component {...pageProps} />;
};

export default appWithTranslation(MyApp);
