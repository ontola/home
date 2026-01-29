import { ReactElement } from 'react';

import Link from 'next/link';

import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  small: string;
  title: string;
  href?: string;
}

export function SectionHeading({
  small,
  title,
  href,
}: SectionHeadingProps): ReactElement {
  return (
    <div className={styles.wrapper}>
      {small && <p className={styles.small}>{small}</p>}
      {href ? (
        <Link href={href} passHref>
          <a>
            <h2 className={styles.heading}>{title}</h2>
          </a>
        </Link>
      ) : (
        <h2 className={styles.heading}>{title}</h2>
      )}
    </div>
  );
}
