import React, { ReactElement } from 'react';

import Link from 'next/link';

import styles from './CasePreview.module.css';
import { MDXItem } from '../utils/getPosts';

export function CasePreview({ slug, data }: MDXItem): ReactElement {
  const { title } = data;

  return (
    <Link
      href={`/cases/${slug}`}
      className={styles.caseWrapper}
      style={{
        backgroundImage: `url(/images/cases/${slug}_preview.png)`,
      }}>

      <h2 className={styles.title}>{title}</h2>

    </Link>
  );
}
