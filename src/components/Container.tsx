import { styled } from '../../stitches.config';

export const Container = styled('div', {
  maxWidth: '$container',
  margin: '0 auto',
  padding: '1rem',
  variants: {
    big: {
      true: {
        maxWidth: '$containerBig',
      },
    },
  },
});
