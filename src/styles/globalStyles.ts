import { globalCss } from '@stitches/react';

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    fontFamily: '$body',
  },
  body: { margin: 0, fontFamily: 'intra', color: '$text', height: '100%' },
  'h1, h2, h3, h4': {
    fontFamily: '$heading',
    margin: 0,
  },
  'p, ul, li, table, a, span': {
    lineHeight: '1.5rem',
    color: '$text',
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
