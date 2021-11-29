import React from 'react';

import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

export default function LocaleSwitcher() {
  const { locale, locales, asPath } = useRouter();
  return (
    <>
      {locales &&
        locales.map((localeName) => {
          if (localeName === locale) {
            return null;
          }
          return (
            <span key={localeName}>
              <Link href={asPath} passHref locale={localeName}>
                <a>{localeName}</a>
              </Link>
            </span>
          );
        })}
    </>
  );
}
