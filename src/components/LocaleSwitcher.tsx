import React from 'react';

import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

export default function LocaleSwitcher() {
  const { locales, asPath } = useRouter();
  return (
    <div>
      {locales.map((localeName) => {
        return (
          <div key={localeName}>
            <Link href={asPath} passHref locale={localeName}>
              <a>{localeName}</a>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
