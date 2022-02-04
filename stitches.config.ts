import { createStitches, createTheme } from '@stitches/react';

export const { keyframes, styled, getCssText, theme, css, globalCss } =
  createStitches({
    theme: {
      fonts: {
        heading: '"inter", "Helvetica Neue", Helvetica, Arial, sans-serif',
        body: '"inter", "Helvetica Neue", Helvetica, Arial, sans-serif',
        code: 'monospace',
      },
      colors: {
        headerText: 'black',
        headerBg: 'white',
        text: 'black',
        text1: '#999999',
        bg0: 'white',
        bg: '#F6F8FB',
        bg1: '#f4f4f4',
        bg2: '#d7d7d7',
        // Should go from footer color to navbar color
        bgBody:
          'linear-gradient(0deg, rgba(19,76,105,1) 0%, rgba(19,76,105,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%)',
        nav: 'rgba(255,255,255,0.7)',
        navContrast: 'rgba(0,0,0,0.05)',
        navContrast2: 'rgba(0,0,0,0.1)',
        primary: 'rgb(19,76,105)',
        footerBg: 'rgb(19,76,105)',
        c2a: 'rgba(152,99,219,1)',
        // SVGs unfortunately do not support linear-gradient values.
        circlesBg: 'url(#circles-gradient)',
        gradient:
          'linear-gradient(90deg, rgba(80,165,202,1) 0%, rgba(152,99,219,1) 100%)',
        gradientDark:
          'linear-gradient(90deg, rgba(70,155,192,1) 0%, rgba(142,89,209,1) 100%)',
      },
      fontSizes: {
        small: '.8rem',
        body: '1rem',
        h3: '1.2rem',
        h2: '1.7rem',
        h1: '3rem',
      },
      sizes: {
        container: '40rem',
        containerBig: '60rem',
        // containerBig / 2 - 3rem
        gridItem: '15rem',
        gridItemSmall: '10rem',
        radius: '.6rem',
      },
      shadows: {
        button: '0px 3px 15px rgba(0,0,0,0.2)',
        buttonInset: 'inset 0px 3px 15px rgba(0,0,0,0.2)',
      },
      zIndices: {
        contentFloating: 1,
        featureTextBlock: 2,
        navigationBar: 10,
        menu: 100,
      },
    },
    media: {
      // These appear not to be working atm
      bp1: '(min-width: 640px)',
      bp2: '(min-width: 768px)',
      bp3: '(min-width: 1024px)',
    },
  });

export const darkTheme = createTheme({
  colors: {
    headerText: 'white',
    headerBg: 'black',
    text: 'white',
    text1: '#555555',
    bgBody: 'black',
    bg0: 'black',
    bg: '#111111',
    bg1: '#222222',
    bg2: '#333333',
    nav: 'rgba(0,0,0,0.7)',
    navContrast: 'rgba(255,255,255,0.2)',
    navContrast2: 'rgba(255,255,255,0.4)',
    footerBg: 'black',
    primary: '#5cc8ff',
  },
});

export const caseTheme = (color: string) =>
  createTheme({
    colors: {
      headerText: 'white',
      headerBg: color,
      bgBody: color,
      nav: 'transparent',
      circlesBg: 'white',
      footerBg: color,
      bg0: 'white',
    },
  });
