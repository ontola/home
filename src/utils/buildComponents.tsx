import Image, { ImageProps } from 'next/image';

import { styled } from '../../stitches.config';
import { BigImage } from '../components/BigImage';
import { FeatureBlock } from '../components/FeatureBlock';
import { TechPill } from '../components/TechPill';
import { TechWrapperSmall } from '../pages/services';
import { TechWrapper } from '../pages/tech';

const ImageWrapper = styled('div', {
  position: 'relative',
});

/** Helper function to construct the custom components for rendering MDX files */
export function buildComponents() {
  const img = (props: ImageProps) => (
    <ImageWrapper>
      <Image
        {...props}
        objectFit="contain"
        // This is not a great solution, but I see not other option.
        height={'100'}
        width={'200'}
        layout="responsive"
        loading="lazy"
        alt={props.alt}
      />
    </ImageWrapper>
  );

  return {
    img,
    FeatureBlock,
    TechPill,
    TechWrapper,
    TechWrapperSmall,
    BigImage,
  };
}
