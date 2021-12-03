import { styled } from '@stitches/react';
import Image from 'next/image';

import { theme } from '../../stitches.config';

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

interface ToolProps {
  technology: string;
}

const ToolStyled = styled('span', {
  color: theme.colors.text1,
  fontSize: theme.fontSizes.small,
});

export function Tool({ technology }: ToolProps) {
  return <ToolStyled>{technology}</ToolStyled>;
}

const FeatureBlockWrapper = styled('div', {
  color: '$text1',
  display: 'flex',
  marginTop: '5rem',
  flexDirection: 'row',
  flex: 1,
  '@media (min-width: 1100px)': {
    marginLeft: '-5rem',
    marginRight: '-5rem',
  },
});

const TextContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  marginBottom: '5rem',
});

const ImageWrapper = styled('div', {
  margin: '0 2rem',
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

export function FeatureBlock({
  title,
  description,
  image,
  tools,
  inverted,
}: FeatureBlockProps) {
  const TextBlock = (
    <TextContent>
      <h3>{title}</h3>
      <p>{description}</p>
      <>
        {tools.map((t) => (
          <Tool key={t} technology={t} />
        ))}
      </>
    </TextContent>
  );

  const ImgBlock = (
    <ImageWrapper inverted={inverted}>
      <Image
        width={300}
        height={200}
        src={`/assets/images/${image}`}
        alt={image}
        objectFit="contain"
      />
    </ImageWrapper>
  );

  return (
    <FeatureBlockWrapper>
      {inverted ? (
        <>
          {ImgBlock}
          {TextBlock}
        </>
      ) : (
        <>
          {TextBlock}
          {ImgBlock}
        </>
      )}
    </FeatureBlockWrapper>
  );
}
