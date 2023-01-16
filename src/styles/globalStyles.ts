import { theme } from '../../stitches.config';

export const globalStyles = {
  '*': {
    boxSizing: 'border-box',
    fontFamily: '$body',
  },
  body: {
    margin: 0,
    fontFamily: '$body',
    color: '$text',
    height: '100%',
    // For elastic scrolling
    background: theme.colors.footerBg,
  },
  'h1, h2, h3, h4': {
    '--fontfamily': theme.fonts.heading,
    fontFamily: 'var(--fontfamily, sans-serif)',
    fontWeight: 'bold',
    color: '$text',
    margin: 0,
    marginTop: '1.5em',
    lineHeight: '1.1em',
    marginBottom: '.5rem',
  },
  h1: {
    fontSize: '$h1',
  },
  h2: {
    fontSize: '$h2',
  },
  h3: {
    fontSize: '$h3',
  },
  p: {
    marginBottom: '1em',
  },
  'p, ul, li, table, a, span': {
    lineHeight: '1.7em',
    fontSize: '$body',
    color: 'inherit',
  },
  li: {
    marginBottom: '0.1em',
    marginLeft: '1rem',
  },
  'ul, ol': {
    marginBottom: '1rem',
  },
  'ul li': {
    listStyle: 'disc',
  },
  'ol li': {
    listStyle: 'number',
  },
  em: {
    fontStyle: 'italic',
  },
  strong: {
    fontWeight: 'bold',
  },
  'p code, pre code': {
    fontFamily: theme.fonts.code,
    color: '$text',
    background: '$bg1',
    border: 'solid 1px $bg2',
    padding: '.2rem',
    fontSize: '1rem',
    overflow: 'auto',
    marginBottom: '1em',
    lineHeight: '1.5rem',
  },
  'pre code': {
    display: 'block',
  },
  button: {
    fontSize: '$body',
  },
  img: {
    maxWidth: '100%',
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
  video: {
    maxWidth: '100%',
  },
};
