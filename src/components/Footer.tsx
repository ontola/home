import Link from 'next/link';

import { styled, theme } from '../../stitches.config';
import { menuPaths } from '../utils/paths';
import LocaleSwitcher from './LocaleSwitcher';

const FooterStyled = styled('div', {
  background: '$footerBg',
  flexShrink: 0,
  paddingBottom: '3rem',
  paddingTop: '3rem',
  marginTop: '10rem',

  '*': {
    color: 'white',
  },
  a: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

const LogoWhite = styled('img', {
  width: '2rem',
  height: '2rem',
  marginRight: '1rem',
});

const FooterContainer = styled('div', {
  maxWidth: theme.sizes.containerBig,
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'row',
  padding: '1rem',
  flexWrap: 'wrap',
});

const SocialIcon = styled('img', {
  alignSelf: 'end',
  svg: {
    fill: '$bg0',
  },
  width: '1.5rem',
  marginRight: '.5rem',
});

const FooterLeft = styled('div', {
  flex: 1,
  alignItems: 'center',
  display: 'flex',
  marginBottom: '1rem',
});

const FooterRight = styled('div', {
  flex: 1,
  justifyContent: 'flex-end',
  display: 'flex',
});

const FooterDivider = styled('div', {
  height: '2px',
  width: '100%',
  maxWidth: theme.sizes.containerBig,
  background: 'white',
  margin: 'auto',
  marginBottom: '2rem',
  marginTop: '2rem',
});

interface FooterProps {
  toggleDarkMode: () => void;
}

const FooterColumn = styled('div', {
  display: 'flex',
  marginRight: '3rem',
  flexDirection: 'column',
  p: {
    marginBottom: '0rem',
  },
});

export const FooterButton = styled('button', {
  background: 'transparent',
  color: 'white',
  outline: 'none',
  border: 'none',
  display: 'inline-block',
  lineHeight: '1.2rem',
  marginLeft: '1rem',
});

export const Columns = styled('div', {
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
});

export function Footer(props: FooterProps) {
  return (
    <FooterStyled>
      <FooterContainer>
        <Columns>
          <FooterColumn>
            <h3>Ontola</h3>
            {menuPaths.map((p) => (
              <Link key={p.title} href={p.href}>
                {p.title}
              </Link>
            ))}
          </FooterColumn>
          <FooterColumn>
            <h3>Contact</h3>
            <a href="https://calendly.com/ontola/30min">Plan een afspraak</a>
            <a href="tel:+31636020942">06 36020942</a>
            <a href="mailto:info@ontola.io">info@ontola.io</a>
          </FooterColumn>
          <FooterColumn>
            <h3>Over</h3>
            <a href="https://argu.co">Onderdeel van Argu B.V.</a>
            <a href="https://goo.gl/maps/rN2ZM1xpz7SFpH7J8">
              <p>Maliebaan 100</p>
              <p>3581 CZ, Utrecht</p>
            </a>
          </FooterColumn>
        </Columns>
      </FooterContainer>
      <FooterDivider />
      <FooterContainer>
        <FooterLeft>
          <LogoWhite src="/images/logo_white.svg" alt="Ontola logo" />
          <LocaleSwitcher />
          <FooterButton onClick={props.toggleDarkMode}>dark mode</FooterButton>
        </FooterLeft>
        <FooterRight>
          <a href="https://github.com/ontola/">
            <SocialIcon src="/images/github.svg" alt="Github" />
          </a>
          <a href="https://www.facebook.com/ontola.io/">
            <SocialIcon src="/images/facebook.svg" alt="Facebook" />
          </a>
          <a href="https://www.linkedin.com/company/18715231/">
            <SocialIcon src="/images/linkedin.svg" alt="LinkedIn" />
          </a>
          <a href="https://twitter.com/ontola_io">
            <SocialIcon src="/images/twitter.svg" alt="Twitter" />
          </a>
        </FooterRight>
      </FooterContainer>
    </FooterStyled>
  );
}
