import Image from 'next/image';

import { styled, theme } from '../../stitches.config';

interface FeatureBlockProps {
  children: React.ReactNode;
  title: string;
  /** Path to image, starting from /images/ */
  image: string;
  /** A big colored number on the side */
}

const TextContent = styled('div', {
  gridArea: 'text',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  background: '$bg',
  height: 'fit-content',
  borderRadius: '20px',
  zIndex: theme.zIndices.featureTextBlock,
});

const ImageWrapper = styled('div', {
  gridArea: 'image',
  maxWidth: '100%',
  width: '40rem',
  // height: '30rem',
  position: 'relative',
  top: '2rem',
  borderRadius: '20px',
  overflow: 'hidden',
  // marginRight: '-2rem',
  // marginBottom: '7rem',
  // transform: 'rotate(2deg)',
});

const marginBig = '10rem';

const FeatureBlockWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  marginBottom: '8rem',

  '&:nth-child(odd)': {
    '@media (min-width: 900px)': {
      gridTemplateAreas: "'image text'",
      [`& ${TextContent}`]: {
        marginRight: '0',
        marginLeft: `-${marginBig}`,
      },
    },
  },

  '@media (min-width: 900px)': {
    display: 'grid',
    [`& ${TextContent}`]: {
      marginRight: `-${marginBig}`,
      padding: '2rem',
      top: '20%',
      position: 'relative',
    },
    [`${ImageWrapper}`]: {
      maxWidth: '100vw',
    },
    gridTemplateAreas: "'text image'",
    marginTop: '5rem',
    flexDirection: 'row',
    marginLeft: '-8rem',
    marginRight: '-8rem',
  },

  '@media (min-width: 1200px)': {
    marginLeft: '-15rem',
    marginRight: '-15rem',
  },
});

const FeatureHeader = styled('h2', {
  fontSize: '2rem',
  marginTop: 0,
  position: 'relative',
});

export function FeatureBlock({ title, children, image }: FeatureBlockProps) {
  return (
    <FeatureBlockWrapper>
      <TextContent>
        <FeatureHeader>{title}</FeatureHeader>
        {children}
      </TextContent>
      <ImageWrapper>
        <Image
          width={800}
          height={600}
          src={`/images/${image}`}
          alt={image}
          objectFit="cover"
        />
      </ImageWrapper>
    </FeatureBlockWrapper>
  );
}
