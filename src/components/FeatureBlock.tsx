import React from 'react';

import Image from "next/legacy/image";

import styles from './FeatureBlock.module.css';

interface FeatureBlockProps {
  children: React.ReactNode;
  title: string;
  image: string;
}

export function FeatureBlock({ title, children, image }: FeatureBlockProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textContent}>
        <h2 className={styles.header}>{title}</h2>
        {children}
      </div>
      <div className={styles.imageWrapper}>
        <Image
          width={800}
          height={600}
          src={`/images/${image}`}
          alt={image}
          objectFit="cover"
        />
      </div>
    </div>
  );
}
