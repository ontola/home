import { styled } from '@stitches/react';
import Image from 'next/image';

import { Tool } from './Tool';

interface FeatureBlockProps {
  title: string;
  description: string;
  /** Path to image, starting from /assets/images/ */
  image: string;
  /** List of ids of technologies used (e.g. typescript) */
  tools: string[];
  /** Renders the image on the left side */
  inverted?: boolean;
}

const TextContent = styled('div', {
  gridArea: 'text',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  marginBottom: '5rem',
});

const FeatureBlockWrapper = styled('div', {
  color: '$text1',
  display: 'grid',
  flexDirection: 'column',
  flex: 1,
  marginBottom: '8rem',
  gridTemplateAreas: "'text' 'image'",

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

  variants: {
    inverted: {
      true: {
        '@media (min-width: 500px)': {
          gridTemplateAreas: "'image text'",
          [`& ${TextContent}`]: {
            marginRight: '0rem',
            marginLeft: '2rem',
          },
        },
      },
    },
  },
});

const ImageWrapper = styled('div', {
  gridArea: 'image',
  // margin: '0 2rem',
  width: '20em',
  position: 'relative',
  top: '2rem',
  transform: 'rotate(5deg)',
  variants: {
    inverted: {
      true: {
        transform: 'rotate(-5deg)',
      },
    },
  },
});

const FeatureHeader = styled('h2', {
  fontSize: '2rem',
});

const ToolsWrapper = styled('div', {
  display: 'flex',
});

export function FeatureBlock({
  title,
  description,
  image,
  tools,
  inverted,
}: FeatureBlockProps) {
  return (
    <FeatureBlockWrapper inverted={inverted}>
      <TextContent>
        <FeatureHeader>{title}</FeatureHeader>
        <p>{description}</p>
        <ToolsWrapper>
          {tools.map((t) => (
            <Tool key={t} technology={t} />
          ))}
        </ToolsWrapper>
      </TextContent>
      <ImageWrapper inverted={inverted}>
        <Image
          width={400}
          height={300}
          src={`/assets/images/${image}`}
          alt={image}
          objectFit="contain"
        />
      </ImageWrapper>
    </FeatureBlockWrapper>
  );
}
