import { useEffect } from 'react';

import { init } from '@socialgouv/matomo-next';
import { AppProps } from 'next/app';
import Script from 'next/script';
import { appWithTranslation } from 'next-i18next';
import '../styles/globals.css';

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL as string;
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID as string;

const MyApp = ({ Component, pageProps }: AppProps) => {
  // https://github.com/SocialGouv/matomo-next
  useEffect(() => {
    init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
  }, []);

  return (
    <>
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-940871433');
            `,
        }}
      />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-940871433"
      />
      <Component {...pageProps} />
    </>
  );
};

export default appWithTranslation(MyApp);
