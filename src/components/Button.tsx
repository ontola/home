import { styled, theme } from '../../stitches.config';

export const buttonStyle = {
  borderRadius: theme.sizes.radius,
  fontSize: '.8rem',
  padding: '.5rem 1rem',
  color: '$headerText',
  background: '$navBg',
  border: 'solid 1px $headerText',
  transition: 'all .2s',
  boxSizing: 'border-box',
  textDecoration: 'none',
  alignSelf: 'flex-start',
  '&:hover': {
    boxShadow: '$button',
    cursor: 'pointer',
    background: '$gradientDark',
    color: 'white',
    border: 'solid 1px transparent',
  },
  '&:active': {
    boxShadow: '$buttonInset',
  },
};

/** Button with header-dependent styling */
export const Button = styled('button', buttonStyle);
export const ButtonLink = styled('a', buttonStyle);
