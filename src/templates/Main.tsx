import { ReactNode } from 'react';

import { caseTheme, darkTheme, styled, theme } from '../../stitches.config';
import { Footer } from '../components/Footer';
import { NavigationBar } from '../components/NavigationBar';
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
  background: theme.colors.bg0,
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  /** Next two lines are needed to show the cirlces, which have a negative z-index */
  position: 'relative',
  zIndex: 0,
});

const Main = ({ caseColor, meta, children }: IMainProps) => {
  const [darkMode, setDarkMode] = useDarkMode();

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
