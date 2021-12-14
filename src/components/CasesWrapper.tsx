import { styled } from '@stitches/react';

import { theme } from '../../stitches.config';

export const CasesWrapper = styled('div', {
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fit, minmax(${theme.sizes.gridItem}, 1fr))`,
  gridAutoRows: theme.sizes.gridItem,
  gridGap: '3rem',
  paddingTop: '3rem',
});
