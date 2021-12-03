import React from 'react';

import { styled } from '@stitches/react';
import Link from 'next/link';

import { Button } from './Button';
import { Logo } from './Logo';

const NavigationBarStyled = styled('nav', {
  background: '$nav',
  backdropFilter: 'blur(2px)',
  zIndex: 1,
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
  '&:hover': {
    textDecoration: 'underline',
  },
});

/** Individual navbar item */
export const NavLink = ({ children, href }: NavLinkProps) => (
  <Link href={href} passHref>
    <NavLinkStyled>{children}</NavLinkStyled>
  </Link>
);

const LinksList = styled('span', {
  display: 'none',
  '@media (min-width: 600px)': {
    display: 'flex',
    alignItems: 'center',
  },
});

const LogoStyled = styled('a', {
  height: '2rem',
  svg: {
    width: 'auto',
    height: 'auto',
  },
  display: 'flex',
});

export const NavigationBar = () => (
  <NavigationBarStyled>
    <NavContainer>
      <Link href="/" passHref>
        <LogoStyled>
          <Logo />
        </LogoStyled>
      </Link>
      <LinksList>
        <NavLink href="/cases/">Cases</NavLink>
        <NavLink href="/services/">Diensten</NavLink>
        <NavLink href="/process/">Werkwijze</NavLink>
        <NavLink href="/about/">Over</NavLink>
        <NavLink href="/blog/">Blog</NavLink>
        <Button>Contact</Button>
      </LinksList>
    </NavContainer>
  </NavigationBarStyled>
);
