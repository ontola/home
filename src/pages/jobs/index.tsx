import { GetStaticProps } from 'next';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { VacancyInfo } from '../../components/VacancyInfo';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { MDXItem, getAllPostsLocale } from '../../utils/getPosts';
import styles from '../about.module.css';

interface VacanciesProps {
  vacancies: MDXItem[];
}

export default function VacaturesIndex({ vacancies }: VacanciesProps) {
  const { t } = useTranslation('jobs');

  return (
    <Main meta={<Meta title={t('title')} description={t('description')} />}>
      <Header
        title={t('title')}
        customImage={
          <img
            className={styles.teamPhoto}
            alt="Ontola team"
            src="/images/photos/team.png"
          />
        }
      >
        <p>{t('description')}</p>
      </Header>

      <Container>
        <VacancyInfo />

        <h2>{t('openRoles')}</h2>
        <ul>
          {vacancies.map((vacancy) => (
            <li key={vacancy.slug}>
              <Link href={`/jobs/${vacancy.slug}`}>
                {vacancy.data.title}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Main>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  // We use our existing utility to list the MDX files inside /content/jobs/
  const vacancies = await getAllPostsLocale(locale, 'jobs');

  return {
    props: {
      vacancies,
      ...(await serverSideTranslations(locale as string, [
        'common',
        'home',
        'jobs',
      ])),
    },
  };
};
