import React from 'react';

import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

import { styled } from '../../stitches.config';

function renderLocaleHuman(locale: string): string {
  switch (locale) {
    case 'en':
      return 'EN';
    case 'nl':
      return 'NL';
    default:
      return 'unknown language';
  }
}

const LocaleSwitchLink = styled('a', {
  color: 'white',
});

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
                <LocaleSwitchLink>
                  {renderLocaleHuman(localeName)}
                </LocaleSwitchLink>
              </Link>
            </span>
          );
        })}
    </>
  );
}
