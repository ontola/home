import Image from 'next/image';

import { styled, theme } from '../../stitches.config';
import { Tool } from './Tool';

interface FeatureBlockProps {
  title: string;
  description: string;
  /** Path to image, starting from /assets/images/ */
  image: string;
  /** List of ids of technologies used (e.g. typescript) */
  tools?: string[];
  /** A big colored number on the side */
  number?: number;
}

const TextContent = styled('div', {
  gridArea: 'text',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  marginBottom: '5rem',
});

const ImageWrapper = styled('div', {
  gridArea: 'image',
  width: '20em',
  height: '15em',
  position: 'relative',
  top: '2rem',
  transform: 'rotate(5deg)',
  borderRadius: '0.5rem',
  overflow: 'hidden',
  marginBottom: '7rem',
  boxShadow: theme.shadows.button,
});

const FeatureBlockWrapper = styled('div', {
  display: 'grid',
  flexDirection: 'column',
  flex: 1,
  marginBottom: '8rem',
  gridTemplateAreas: "'text' 'image'",

  '&:nth-child(odd)': {
    [`& ${ImageWrapper}`]: {
      transform: 'rotate(-5deg)',
    },
    '@media (min-width: 500px)': {
      gridTemplateAreas: "'image text'",
      [`& ${TextContent}`]: {
        marginRight: '0rem',
        marginLeft: '2rem',
      },
    },
  },

  '@media (min-width: 500px)': {
    [`& ${TextContent}`]: {
      marginRight: '2rem',
    },
    gridTemplateAreas: "'text image'",
    marginTop: '5rem',
    flexDirection: 'row',
  },

  '@media (min-width: 900px)': {
    marginLeft: '-5rem',
    marginRight: '-5rem',
  },
});

const FeatureHeader = styled('h2', {
  fontSize: '2rem',
  position: 'relative',
});

const ToolsWrapper = styled('div', {
  display: 'flex',
});

const BigNumber = styled('span', {
  fontSize: '6rem',
  position: 'absolute',
  left: '-5rem',
  top: '-4.5rem',
  background: theme.colors.gradient,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  zIndex: 1,
});

export function FeatureBlock({
  title,
  description,
  image,
  tools,
  number,
}: FeatureBlockProps) {
  return (
    <FeatureBlockWrapper>
      <TextContent>
        <FeatureHeader>
          {number && <BigNumber>{number}</BigNumber>}
          {title}
        </FeatureHeader>
        <p>{description}</p>
        {tools && (
          <ToolsWrapper>
            {tools.map((t) => (
              <Tool key={t} technology={t} />
            ))}
          </ToolsWrapper>
        )}
      </TextContent>
      <ImageWrapper>
        <Image
          width={400}
          height={300}
          src={`/assets/images/${image}`}
          alt={image}
          objectFit="cover"
        />
      </ImageWrapper>
    </FeatureBlockWrapper>
  );
}
