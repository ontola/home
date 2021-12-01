import { styled } from '@stitches/react';

import { theme } from '../../stitches.config';

export const Button = styled('button', {
  borderColor: theme.colors.c2a,
  color: theme.colors.c2a,
  borderRadius: '9999px',
  fontSize: '1rem',
  padding: '10px 15px',
  background: '$bg',
  '&:hover': {
    boxShadow: '$button',
    cursor: 'pointer',
  },
  '&:active': {
    boxShadow: '$buttonInset',
  },
});
