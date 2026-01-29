import React, { PropsWithChildren } from 'react';

import clsx from 'clsx';

import styles from './Container.module.css';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  big?: boolean;
}

export const Container = ({
  big,
  className,
  ...props
}: PropsWithChildren<ContainerProps>) => {
  return (
    <div
      className={clsx(styles.container, big && styles.big, className)}
      {...props}
    />
  );
};
