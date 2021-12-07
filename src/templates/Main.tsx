import { ReactNode } from 'react';

import { styled } from '@stitches/react';
import { reset } from 'stitches-reset';

import { caseTheme, darkTheme, globalCss } from '../../stitches.config';
import { Footer } from '../components/Footer';
import { NavigationBar } from '../components/NavigationBar';
import { globalStyles } from '../styles/globalStyles';
import { useDarkMode } from '../utils/useDarkMode';

type IMainProps = {
  meta?: ReactNode;
  children: ReactNode;
  /** The header becomes this color and the text is white */
  caseColor?: string;
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

const Main = ({ caseColor, meta, children }: IMainProps) => {
  const [darkMode, setDarkMode] = useDarkMode();

  globalCss(reset);
  globalStyles();

  let classes = '';
  if (caseColor && !darkMode) {
    classes = classes.concat(caseTheme(caseColor));
  }
  if (darkMode) {
    classes = classes.concat(` ${darkTheme}`);
  }

  return (
    <MainStyled className={classes}>
      {meta}
      <NavigationBar />
      <Content>{children}</Content>
      <Footer toggleDarkMode={() => setDarkMode(!darkMode)} />
    </MainStyled>
  );
};

export { Main };
