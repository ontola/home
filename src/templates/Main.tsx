import { ReactNode } from 'react';

import Link from 'next/link';

import LocaleSwitcher from '../components/LocaleSwitcher';
import { AppConfig } from '../utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <>
    <nav>
      {props.meta}
      {AppConfig.title}
      {AppConfig.description}
      <Link href="/">Home</Link>
      <Link href="/about/">About</Link>
      <Link href="/blog/">Blog</Link>
      <LocaleSwitcher />
    </nav>
    {props.children}
  </>
);

export { Main };
