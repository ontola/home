import React, { useState } from 'react';

import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import { globalCss, styled, theme } from '../../stitches.config';
import { menuPaths } from '../utils/paths';
import { Button } from './Button';
import { Logo } from './Logo';

const NavigationBarStyled = styled('nav', {
  background: '$nav',
  zIndex: theme.zIndices.navigationBar,
});

const NavContainer = styled('div', {
  padding: '0 1rem',
  margin: '0 auto',
  maxWidth: theme.sizes.containerBig,
  display: 'flex',
  height: '3rem',
  alignItems: 'center',
});

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
}

const NavLinkStyled = styled('a', {
  color: theme.colors.headerText,
  // marginRight: '1rem',
  display: 'block',
  textDecoration: 'none',
  fontSize: '.9rem',
  borderRadius: '.5rem',
  padding: '.2rem .6rem',
  '&:hover': {
    background: theme.colors.navContrast,
  },
  '&:active': {
    background: theme.colors.navContrast2,
  },
});

/** Individual navbar item */
export const NavLink = ({ children, href }: NavLinkProps) => (
  <Link href={href} passHref>
    <NavLinkStyled>{children}</NavLinkStyled>
  </Link>
);

const LinksList = styled('div', {
  // display: 'none',
  variants: {
    show: {
      true: {
        top: '0%',
        display: 'flex',
        color: 'red',
        'body &': {
          maxHeight: '100vh',
          overflow: 'hidden',
        },
      },
    },
  },
  '@media (max-width: 700px)': {
    backgroundColor: theme.colors.headerBg,
    position: 'fixed',
    top: '110%',
    bottom: 0,
    left: 0,
    right: 0,
    maxWidth: '100vw',
    height: '100%',
    zIndex: theme.zIndices.menu,
    flexDirection: 'column',
    padding: '1rem',
    transition: '.2s inset',
    variants: {
      show: {
        true: {
          top: '0%',
        },
      },
    },
    [`& ${NavLinkStyled}`]: {
      padding: '.3rem',
      fontSize: '1.2rem',
    },
  },
  '@media (min-width: 701px)': {
    display: 'flex',
    alignItems: 'center',
  },
});

const MenuButtonStyles = {
  alignSelf: 'center',
  '@media (min-width: 701px)': {
    display: 'none',
  },
};

const LogoBottom = styled('div', {
  flex: '1 1 0%',
  display: 'flex',
  padding: '.5rem',
  alignItems: 'flex-end',
  '@media (min-width: 701px)': {
    display: 'none',
  },
});

const CloseMenuButtonStyles = styled('div', {
  marginTop: '-.5rem',
  alignSelf: 'flex-end',
  justifySelf: 'flex-end',
  marginLeft: 'auto',
  background: theme.colors.bg1,
  borderRadius: theme.sizes.radius,
  padding: '.5rem',
  border: 'none',
  color: theme.colors.text,
  outline: 'none',
  '@media (min-width: 701px)': {
    display: 'none',
  },
});

const LogoStyled = styled('a', {
  height: '2rem',
  svg: {
    width: 'auto',
    height: '2rem',
  },
  alignItems: 'center',
  display: 'flex',
  flex: 1,
});

export const NavigationBar = () => {
  const [show, setShow] = useState(false);
  const { t } = useTranslation('common');

  globalCss({
    variants: {
      show: {
        true: {
          body: {
            overflow: 'hidden',
            maxHeight: '100vh',
          },
        },
      },
    },
  })();

  return (
    <NavigationBarStyled>
      <NavContainer>
        <Link href="/" passHref>
          <LogoStyled>
            <Logo />
          </LogoStyled>
        </Link>
        <Button css={MenuButtonStyles} onClick={() => setShow(!show)}>
          Menu
        </Button>
        {/* <MenuButton onClick={() => setShow(!show)}>Menu</MenuButton> */}
        <LinksList show={show}>
          {show && (
            <CloseMenuButtonStyles onClick={() => setShow(!show)}>
              close
            </CloseMenuButtonStyles>
          )}
          {menuPaths.map((p) => (
            <NavLink key={p.key} href={p.href}>
              {t(p.key)}
            </NavLink>
          ))}
          <LogoBottom>
            <Link href="/" passHref>
              <a>
                <Logo />
              </a>
            </Link>
          </LogoBottom>
        </LinksList>
      </NavContainer>
    </NavigationBarStyled>
  );
};
