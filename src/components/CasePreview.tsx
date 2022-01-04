import { styled } from '@stitches/react';
import Link from 'next/link';

import { theme } from '../../stitches.config';
import { MDXItem } from '../utils/getPosts';

const CaseWrapper = styled('a', {
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  width: theme.sizes.gridItem,
  height: theme.sizes.gridItem,
  borderRadius: '2.5rem',
  alignItems: 'flex-end',
  display: 'flex',
  textDecoration: 'none',
  transition: '.2s box-shadow, .2s transform',
  '&:hover': {
    boxShadow: '$button',
    transform: 'scale(1.03)',
  },
});

const Title = styled('h2', {
  color: '#fff',
  marginLeft: '1.5rem',
  marginBottom: '1.5rem',
  fontSize: '1.2rem',
  fontWeight: 'normal',
  // textShadow: '0px 2px 1px rgba(0,0,0,0.2)',
});

export function CasePreview({ slug, data }: MDXItem): JSX.Element {
  const { title } = data;

  return (
    <Link href={`/cases/${slug}`} passHref>
      <CaseWrapper
        style={{
          backgroundImage: `url(/images/cases/preview_${slug}.png)`,
        }}
      >
        <Title>{title}</Title>
      </CaseWrapper>
    </Link>
  );
}
