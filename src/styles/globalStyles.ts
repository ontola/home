import { globalCss } from '@stitches/react';

export const globalStyles = globalCss({
  body: { margin: 0, fontFamily: 'intra' },
  'h1, h2, h3, h4': {
    fontFamily: '$heading',
    margin: 0,
  },
  'p, ul, li, table, a': {
    fontFamily: '$body',
    lineHeight: '1.5rem',
  },
  'p code, pre code': {
    fontFamily: '$code',
    background: '$bg1',
    border: 'solid 1px $bg2',
    padding: '.2rem',
    fontSize: '0.8rem',
    overflow: 'auto',
    lineHeight: '1.5rem',
  },
  'pre code': {
    display: 'block',
  },
  table: {
    background: '$bg1',
    borderCollapse: 'collapse',
  },
  'th, td': {
    textAlign: 'left',
    padding: '.4em',
    border: 'solid 1px $bg2',
  },
});
