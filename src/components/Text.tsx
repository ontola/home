import { styled } from '@stitches/react';

export const Text = styled('p', {
  fontFamily: '$heading',
  color: '$text',
  lineHeight: '1.5em',

  variants: {
    as: {
      body: {
        fontSize: '$body',
      },
      h1: {
        fontSize: '$h1',
        lineHeight: '1.1em',
      },
      h2: {
        fontSize: '$h2',
      },
      h3: {
        fontSize: '$h3',
      },
    },
  },

  defaultVariants: {
    as: 'body',
  },
});

export const StyledLink = styled(Text, {
  color: '$primary',
});
