import React, { useState, useEffect } from 'react';

import clsx from 'clsx';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import { Button } from './Button';
import { Logo } from './Logo';
import styles from './NavigationBar.module.css';
import { menuPaths } from '../utils/paths';

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
}

/** Individual navbar item */
export const NavLink = ({ children, href }: NavLinkProps) => (
  <Link href={href} className={styles.link}>
    {children}
  </Link>
);

export const NavigationBar = () => {
  const [show, setShow] = useState(false);
  const { t } = useTranslation('common');

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
      document.body.style.maxHeight = '100vh';
    } else {
      document.body.style.overflow = '';
      document.body.style.maxHeight = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.maxHeight = '';
    };
  }, [show]);

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>

          <Logo />

        </Link>
        <Button className={styles.menuButton} onClick={() => setShow(!show)}>
          Menu
        </Button>
        <div className={clsx(styles.linksList, show && styles.show)}>
          {show && (
            <button
              className={styles.closeButton}
              onClick={() => setShow(!show)}
            >
              close
            </button>
          )}
          {menuPaths.map((p) => (
            <NavLink key={p.key} href={p.href}>
              {t(p.key)}
            </NavLink>
          ))}
          <div className={styles.logoBottom}>
            <Link href="/">

              <Logo />

            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
