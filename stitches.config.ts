import { createStitches } from '@stitches/react';

export const { styled, getCssText } = createStitches({
  theme: {
    fonts: {
      heading: 'inter',
      body: 'inter',
      code: 'monospace',
    },
    colors: {
      text: 'black',
      bg: 'white',
      bg1: '#f4f4f4',
      bg2: '#d7d7d7',
    },
    fontSizes: {
      body: '1rem',
      h3: '1.5rem',
      h2: '2rem',
      h1: '3rem',
    },
    sizes: {
      container: '40rem',
    },
  },
});
