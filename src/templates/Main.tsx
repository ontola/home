import { ReactNode } from 'react';

import { styled } from '@stitches/react';
import Image from 'next/image';

import { Container } from '../components/Container';
import { NavigationBar } from '../components/NavigationBar';
import { globalStyles } from '../styles/globalStyles';

type IMainProps = {
  meta?: ReactNode;
  children: ReactNode;
};

const Footer = styled('div', {
  // margin: '0 auto',
  background: '$primary',
  flexShrink: 0,
});

const Content = styled('div', {
  flex: '1 0 auto',
});

const MainStyled = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

const LogoWhite = styled('div', {
  width: '2rem',
  height: '2rem',
});

const Main = (props: IMainProps) => {
  globalStyles();
  return (
    <MainStyled>
      {props.meta}
      <NavigationBar />
      <Content>{props.children}</Content>
      <Footer>
        <Container>
          <LogoWhite>
            <Image
              width={50}
              height={50}
              src="/assets/images/logo_white.svg"
              alt="Logo"
            />
          </LogoWhite>
        </Container>
      </Footer>
    </MainStyled>
  );
};

export { Main };
