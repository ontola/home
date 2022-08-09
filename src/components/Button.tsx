import { styled, theme } from '../../stitches.config';

export const buttonStyle = {
  borderRadius: theme.sizes.radius,
  fontSize: '1rem',
  padding: '.5rem 1rem',
  color: 'white !important',
  background: theme.colors.gradient,
  // background: '$navBg',
  // border: 'solid 1px $headerText',
  transition: 'all .2s',
  boxSizing: 'border-box',
  textDecoration: 'none',
  alignSelf: 'flex-start',
  '&:hover': {
    boxShadow: '$button',
    cursor: 'pointer',
    background: theme.colors.gradientDark,
    // border: 'solid 1px transparent',
  },
  '&:active': {
    boxShadow: '$buttonInset',
    hahaha
  },
  border: 'none',
};

/** Button with header-dependent styling */
export const Button = styled('button', buttonStyle);
export const ButtonLink = styled('a', buttonStyle);
