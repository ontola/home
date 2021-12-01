import { styled } from '@stitches/react';

import LocaleSwitcher from './LocaleSwitcher';

const FooterStyled = styled('div', {
  background: '$primary',
  flexShrink: 0,
  paddingBottom: '3rem',
  paddingTop: '3rem',
});

const LogoWhite = styled('img', {
  width: '2rem',
  height: '2rem',
  marginRight: '1rem',
});

const FooterContainer = styled('div', {
  width: '$container',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'row',
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
});

interface FooterProps {
  toggleDarkMode: () => void;
}

export const FooterButton = styled('button', {
  background: 'transparent',
  color: 'white',
  outline: 'none',
  border: 'none',
});

export function Footer(props: FooterProps) {
  return (
    <FooterStyled>
      <FooterContainer>
        <FooterLeft>
          <LogoWhite src="/assets/images/logo_white.svg" alt="Ontola logo" />
          <LocaleSwitcher />
          <FooterButton onClick={props.toggleDarkMode}>dark mode</FooterButton>
        </FooterLeft>
        <SocialIcon src="/assets/images/facebook.svg" alt="Facebook" />
        <SocialIcon src="/assets/images/github.svg" alt="Facebook" />
        <SocialIcon src="/assets/images/linkedin.svg" alt="Facebook" />
        <SocialIcon src="/assets/images/twitter.svg" alt="Facebook" />
      </FooterContainer>
    </FooterStyled>
  );
}
