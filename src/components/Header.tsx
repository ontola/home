import React, { ReactElement } from 'react';

import Image from "next/image";

import { Circles } from './Circles';
import styles from './Header.module.css';

interface HeaderProps {
  title: string;
  /** Path of the image. Must be in `public/images/${name}` */
  image?: string;
  children?: React.ReactNode;
  /** React element that appears after the text. */
  customImage?: React.ReactNode;
  /** URL of floating PNG  */
  floatingImage?: string;
}

export function Header({
  floatingImage,
  customImage,
  children,
  title,
  image,
}: HeaderProps): ReactElement {
  return (
    <header className={styles.wrapper}>
      <div className={styles.circlesWrapper}>
        <Circles />
      </div>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1 className={styles.heading}>{title}</h1>
          {children && <div className={styles.children}>{children}</div>}
        </div>
        {image && (
          <div className={styles.imageWrapper}>
            <Image
              width={400}
              height={300}
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              src={`/images/${image}`}
              alt=""
            />
          </div>
        )}
        {floatingImage && (
          <img className={styles.floatingImg} src={floatingImage} alt="" />
        )}
        {customImage}
      </div>
    </header>
  );
}
