import Link from 'next/link';

import styles from './FeatureBlock.module.css';

interface FeatureBlockProps {
  children: React.ReactNode;
  title: string;
  image?: string;
}

export function FeatureBlock({ title, children, image }: FeatureBlockProps) {
  return (
    <div className={`${styles.wrapper} ${!image ? styles.noImage : ''}`}>
      <div className={styles.textContent}>
        <h2 className={styles.header}>{title}</h2>
        {children}
      </div>
      {image && (
        <div className={styles.imageWrapper}>
          <img
            src={`/images/${image}`}
            alt={title}
            className={styles.image}
          />
        </div>
      )}
    </div>
  );
}
