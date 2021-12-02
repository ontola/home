import { globalCss } from '../../stitches.config';

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    fontFamily: '$body',
  },
  body: {
    margin: 0,
    fontFamily: 'intra',
    color: '$text',
    height: '100%',
    background: '$bg',
  },
  'h1, h2, h3, h4': {
    fontFamily: '$heading',
    color: '$text',
    margin: 0,
    marginBottom: '1rem',
  },
  h1: {
    fontSize: '$h1',
  },
  'p, ul, li, table, a, span': {
    lineHeight: '1.5em',
    fontSize: '$body',
    color: '$text',
  },
  'p code, pre code': {
    fontFamily: '$code',
    color: '$text',
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
  button: {
    fontSize: '$body',
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
