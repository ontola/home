import Image, { ImageProps } from 'next/image';

import styles from './mdx.module.css';
import { BigImage } from '../components/BigImage';
import ScreenshotGrid from '../components/ScreenshotGrid';
import { FeatureBlock } from '../components/FeatureBlock';
import { TechPill } from '../components/TechPill';
import { TechWrapperSmall } from '../pages/services';
import { TechWrapper } from '../pages/tech';

/** Helper function to construct the custom components for rendering MDX files */
export function buildComponents() {
  const img = (props: ImageProps) => (
    <div className={styles.imageWrapper}>
      <Image
        {...props}
        // This is not a great solution, but I see not other option.
        height={100}
        width={200}
        alt={props.alt || ''}
        style={{
          objectFit: 'contain',
          width: '100%',
          height: 'auto',
          maxWidth: '100%'
        }}
      />
    </div>
  );

  return {
    img,
    FeatureBlock,
    TechPill,
    TechWrapper,
    TechWrapperSmall,
    BigImage,
    ScreenshotGrid,
  };
}
