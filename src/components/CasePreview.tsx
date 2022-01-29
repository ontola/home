import { styled } from '@stitches/react';
import Link from 'next/link';

import { theme } from '../../stitches.config';
import { MDXItem } from '../utils/getPosts';

const CaseWrapper = styled('a', {
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  width: theme.sizes.gridItem,
  maxWidth: '100%',
  height: theme.sizes.gridItem,
  borderRadius: '2.5rem',
  alignItems: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
  textDecoration: 'none',
  transition: '.2s box-shadow, .2s transform',
  padding: '1rem',
  justifyContent: 'flex-end',
  overflow: 'hidden',
  '*': {
    color: 'white',
  },
  p: {
    marginBottom: '0',
  },
  '&:hover': {
    boxShadow: '$button',
    transform: 'scale(1.03)',
  },
});

const Title = styled('h2', {
  justifySelf: 'flex-end',
  color: '#fff',
  fontSize: '1.8rem',
  fontWeight: 'bold',
  textShadow: '0 0 0.3rem rgb(0 0 0 / 50%)',
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
        <p>WOAT</p>
      </CaseWrapper>
    </Link>
  );
}