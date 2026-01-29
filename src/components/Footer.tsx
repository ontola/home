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
            <Link href="/">

              <h3>Ontola</h3>

            </Link>
            {menuPaths.map((p) => (
              <Link key={p.key} href={p.href} style={{ display: 'block' }}>
                {t(p.key)}
              </Link>
            ))}
          </div>
          <div className={styles.column}>
            <Link href={paths.about}>
              <h3>{t('about')}</h3>
            </Link>
            <div className={styles.infoBlock}>
              <a href="https://openkvk.nl/company/hoofdvestiging-argu-bv-65684168-34385940">{t('partOf')}</a>
              <a href="https://goo.gl/maps/rN2ZM1xpz7SFpH7J8">
                Gerrit van der Veenstraat 131
                <br />
                3762 XK, Soest
              </a>
            </div>
            <div className={styles.infoBlock}>
              <a href={calendly}>{t('plan')}</a>
              <a href="tel:+31636020942">{t('call')}</a>
              <a href="mailto:info@ontola.io">info@ontola.io</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.container}>
        <div className={styles.left}>
          <Link href="/">

            <img
              className={styles.logoWhite}
              src="/images/logo_white.svg"
              alt="Ontola logo"
            />

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
