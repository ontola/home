import React from 'react';

import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import styles from './index.module.css';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { TechPill } from '../../components/TechPill';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { MDXItem, getAllPostsLocale } from '../../utils/getPosts';

interface CaseProps {
  posts: MDXItem[];
}

export const TechWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.techWrapper}>{children}</div>
);

const CasesIndex = ({ posts }: CaseProps) => {
  const { t } = useTranslation('tech');

  return (
    <Main
      meta={<Meta title={t('headTitle')} description={t('headDescription')} />}
    >
      <Header title={t('heroTitle')}>
        <p>{t('heroDescription')}</p>
      </Header>
      <Container big>
        <TechWrapper>
          {posts.map((post, i) => (
            <TechPill big key={i} technology={post.slug} />
          ))}
        </TechWrapper>
      </Container>
    </Main>
  );
};

export default CasesIndex;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const posts = await getAllPostsLocale(locale, 'tech');
  return {
    props: {
      posts,
      ...(await serverSideTranslations(locale as string, ['common', 'tech'])),
    },
  };
};
