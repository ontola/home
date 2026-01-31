import Link from 'next/link';
import React, { PropsWithChildren } from 'react';

import clsx from 'clsx';

import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}
interface ButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary';
}

export const Button = ({
  className,
  variant = 'primary',
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return <button className={clsx(styles.button, styles[variant], className)} {...props} />;
};

export const ButtonLink = ({
  className,
  href,
  variant = 'primary',
  ...props
}: PropsWithChildren<ButtonLinkProps> & { href?: string }) => {
  if (href) {
    return (
      <Link href={href} className={clsx(styles.button, styles[variant], className)} {...props} />
    );
  }
  return <a className={clsx(styles.button, styles[variant], className)} {...props} />;
};

// Export style object for potential legacy usage (if any), but it's now decoupled
// Warning: This is NOT the stitches style object anymore.
// Analyzing usage, it seems only used in Button.tsx in the previous code.
