import { styled } from '@stitches/react';
import Link from 'next/link';

import { theme } from '../../stitches.config';

interface ToolProps {
  technology: string;
}

const ToolStyled = styled('a', {
  color: theme.colors.text1,
  fontSize: theme.fontSizes.small,
  border: '1px solid',
  borderColor: theme.colors.text1,
  display: 'inline-block',
  borderRadius: theme.sizes.radius,
  padding: '.5rem .8rem',
  marginRight: '.5rem',
  textDecoration: 'none',
  '&:hover': {
    color: theme.colors.text,
  },
});

export function Tool({ technology }: ToolProps) {
  return (
    <Link href={`/tech/${technology}`} passHref>
      <ToolStyled>{technology}</ToolStyled>
    </Link>
  );
}
