import { ReactNode } from 'react';

import { globalCss, styled } from '@stitches/react';
import { reset } from 'stitches-reset';

import { darkTheme } from '../../stitches.config';
import { Footer } from '../components/Footer';
import { NavigationBar } from '../components/NavigationBar';
import { globalStyles } from '../styles/globalStyles';
import { useDarkMode } from '../utils/useDarkMode';

type IMainProps = {
  meta?: ReactNode;
  children: ReactNode;
};

const Content = styled('div', {
  flex: '1 0 auto',
});

const MainStyled = styled('div', {
  background: '$bg',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  /** Next two lines are needed to show the cirlces, which have a negative z-index */
  position: 'relative',
  zIndex: 0,
});

const Main = (props: IMainProps) => {
  const [darkMode, setDarkMode] = useDarkMode();

  globalCss(reset);
  globalStyles();
  return (
    <MainStyled className={darkMode ? darkTheme : ''}>
      {props.meta}
      <NavigationBar />
      <Content>{props.children}</Content>
      <Footer toggleDarkMode={() => setDarkMode(!darkMode)} />
    </MainStyled>
  );
};

export { Main };
