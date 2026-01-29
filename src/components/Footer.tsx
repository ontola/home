import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import styles from './Footer.module.css';
import LocaleSwitcher from './LocaleSwitcher';
import { calendly } from '../data/links';
import { menuPaths, paths } from '../utils/paths';

interface FooterProps {
  toggleDarkMode: () => void;
}

export function Footer(props: FooterProps) {
  const { t } = useTranslation('common');

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.columns}>
          <div className={styles.column}>
            <Link href="/" passHref>
              <a>
                <h3>Ontola</h3>
              </a>
            </Link>
            {menuPaths.map((p) => (
              <Link key={p.key} href={p.href}>
                <a style={{ display: 'block' }}>{t(p.key)}</a>
              </Link>
            ))}
          </div>
          <div className={styles.column}>
            <Link href={paths.contact} passHref>
              <a>
                <h3>{t('contact')}</h3>
              </a>
            </Link>
            <a href={calendly}>{t('plan')}</a>
            <a href="tel:+31636020942">{t('call')}</a>
            <a href="mailto:info@ontola.io">info@ontola.io</a>
          </div>
          <div className={styles.column}>
            <Link href={paths.about} passHref>
              <a>
                <h3>{t('about')}</h3>
              </a>
            </Link>
            <a href="https://argu.co">{t('partOf')}</a>
            <a href="https://goo.gl/maps/rN2ZM1xpz7SFpH7J8">
              <p>Maliebaan 100</p>
              <p>3581 CZ, Utrecht</p>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.container}>
        <div className={styles.left}>
          <Link href="/" passHref>
            <a>
              <img
                className={styles.logoWhite}
                src="/images/logo_white.svg"
                alt="Ontola logo"
              />
            </a>
          </Link>
          <LocaleSwitcher />
          <button className={styles.button} onClick={props.toggleDarkMode}>
            {t('darkMode')}
          </button>
        </div>
        <div className={styles.right}>
          <a href="https://github.com/ontola/">
            <img
              className={styles.socialIcon}
              src="/images/github.svg"
              alt="Github"
            />
          </a>
          <a href="https://www.facebook.com/ontola.io/">
            <img
              className={styles.socialIcon}
              src="/images/facebook.svg"
              alt="Facebook"
            />
          </a>
          <a href="https://www.linkedin.com/company/18715231/">
            <img
              className={styles.socialIcon}
              src="/images/linkedin.svg"
              alt="LinkedIn"
            />
          </a>
          <a href="https://twitter.com/ontola_io">
            <img
              className={styles.socialIcon}
              src="/images/twitter.svg"
              alt="Twitter"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
