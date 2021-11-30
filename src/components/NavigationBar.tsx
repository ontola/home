import React from 'react';

import { styled } from '@stitches/react';
import Image from 'next/image';
import Link from 'next/link';

import LocaleSwitcher from './LocaleSwitcher';

const NavigationBarStyled = styled('nav', {
  background: '$nav',
  backdropFilter: 'blur(2px)',
});

const NavContainer = styled('div', {
  margin: '0 auto',
  maxWidth: '$container',
  display: 'flex',
  height: '3rem',
  alignItems: 'center',
});

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
}

const NavLinkStyled = styled('a', {
  color: '$text',
  marginRight: '1rem',
  display: 'block',
  textDecoration: 'none',
  fontSize: '.9rem',
});

/** Individual navbar item */
export const NavLink = ({ children, href }: NavLinkProps) => (
  <Link href={href} passHref>
    <NavLinkStyled>{children}</NavLinkStyled>
  </Link>
);

export const NavigationBar = () => (
  <NavigationBarStyled>
    <NavContainer>
      <Link href="/" passHref>
        <a>
          <Image
            src={'/assets/images/logo.svg'}
            alt="Ontola.io"
            height={30}
            width={180}
          />
        </a>
      </Link>
      <NavLink href="/cases/">Cases</NavLink>
      <NavLink href="/services/">Diensten</NavLink>
      <NavLink href="/process/">Werkwijze</NavLink>
      <NavLink href="/about/">Over</NavLink>
      <NavLink href="/blog/">Blog</NavLink>
      <LocaleSwitcher />
    </NavContainer>
  </NavigationBarStyled>
);
