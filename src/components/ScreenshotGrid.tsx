import React from 'react';
import Image from 'next/image';
import styles from './ScreenshotGrid.module.css';

export interface ScreenshotGridProps {
  images: string[];
}

const ScreenshotGrid: React.FC<ScreenshotGridProps> = ({ images }) => {
  return (
    <div className={styles.grid}>
      {images.map((src, index) => (
        <div key={index} className={styles.imageWrapper}>
          <Image
            src={`/images/${src}`}
            alt={`Screenshot ${index + 1}`}
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
