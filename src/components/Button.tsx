import { styled } from '@stitches/react';

import { theme } from '../../stitches.config';

/** Button with header-dependent styling */
export const HeaderButton = styled('button', {
  borderRadius: theme.sizes.radius,
  fontSize: '.8rem',
  padding: '.5rem 1rem',
  color: '$headerText',
  background: '$navBg',
  border: 'solid 1px $headerText',
  // transition: 'all .2s',

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
});
