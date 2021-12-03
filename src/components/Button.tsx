import { styled } from '@stitches/react';

import { theme } from '../../stitches.config';

export const Button = styled('button', {
  borderRadius: theme.sizes.radius,
  fontSize: '.8rem',
  padding: '.5rem 1rem',
  color: 'white',
  background: '$gradient',
  border: 'none',
  transition: 'all .2s',

  '&:hover': {
    boxShadow: '$button',
    cursor: 'pointer',
    background: '$gradientDark',
  },
  '&:active': {
    boxShadow: '$buttonInset',
  },
});
