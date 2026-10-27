import React from 'react';

import Image from 'next/image';

import styles from './ScreenshotGrid.module.css';

export interface ScreenshotGridProps {
  images: string[];
  /** Alt texts, in the same order as `images` */
  alts?: string[];
  /** CSS aspect ratio of each tile, defaults to a phone screen */
  aspect?: string;
}

const ScreenshotGrid: React.FC<ScreenshotGridProps> = ({
  images,
  alts,
  aspect,
}) => {
  return (
    <div
      className={styles.grid}
      style={
        aspect
          ? { gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }
          : undefined
      }
    >
      {images.map((src, index) => (
        <div
          key={index}
          className={styles.imageWrapper}
          style={aspect ? { aspectRatio: aspect } : undefined}
        >
          <Image
            src={`/images/${src}`}
            alt={alts?.[index] ?? `Screenshot ${index + 1}`}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className={styles.image}
          />
        </div>
      ))}
    </div>
  );
};

export default ScreenshotGrid;
