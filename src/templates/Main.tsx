import React, { ReactNode, useEffect } from 'react';

import styles from './Main.module.css';
import { Footer } from '../components/Footer';
import { NavigationBar } from '../components/NavigationBar';
import { useDarkMode } from '../utils/useDarkMode';

type IMainProps = {
  meta?: ReactNode;
  children: ReactNode;
  /** The header becomes this color and the text is white */
  caseColor?: string;
};

const Main = ({ caseColor, meta, children }: IMainProps) => {
  const [darkMode, setDarkMode] = useDarkMode();

  useEffect(() => {
    if (darkMode) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.removeAttribute('data-theme');
    }
  }, [darkMode]);

  const caseStyle =
    caseColor && !darkMode
      ? ({
          '--colors-headerText': 'white',
          '--colors-headerBg': caseColor,
          '--colors-bgBody': caseColor,
          '--colors-nav': 'transparent',
          '--colors-circlesBg': 'white',
          '--colors-footerBg': caseColor,
          '--colors-bg0': 'white',
        } as React.CSSProperties)
      : {};

  // Note: We apply styles to appWrapper because local styles don't easily propagate to body
  // unless we set them on body.
  // The original 'caseTheme' generated a class applied to main Wrapper.
  // The original 'globalStyles' used these vars for body background.
  // Since body background is set via var(--colors-footerBg), setting it here on Wrapper
  // won't affect body immediately unless we use a portal or JS.
  // But given AppWrapper is min-h-screen, it covers the viewport usually.

  return (
    <div className={styles.appWrapper} style={caseStyle}>
      {meta}
      <NavigationBar />
      <main className={styles.content}>{children}</main>
      <Footer toggleDarkMode={() => setDarkMode(!darkMode)} />
    </div>
  );
};

export { Main };
