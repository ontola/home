import React from 'react';

import styles from './CasesWrapper.module.css';

export const CasesWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
