import React, { PropsWithChildren } from 'react';

import clsx from 'clsx';

import styles from './Text.module.css';

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: any;
}

export const Text = ({
  as: Component = 'p',
  className,
  ...props
}: PropsWithChildren<TextProps>) => {
  let variantClass = styles.body;
  if (typeof Component === 'string') {
    if (Component === 'h1') variantClass = styles.h1;
    if (Component === 'h2') variantClass = styles.h2;
    if (Component === 'h3') variantClass = styles.h3;
  }

  return (
    <Component
      className={clsx(styles.text, variantClass, className)}
      {...props}
    />
  );
};

export const StyledLink = ({
  className,
  ...props
}: PropsWithChildren<TextProps>) => {
  return <Text as="a" className={clsx(styles.link, className)} {...props} />;
};
