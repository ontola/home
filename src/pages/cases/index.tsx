import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { CasePreview } from '../../components/CasePreview';
import { CasesWrapper } from '../../components/CasesWrapper';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { MDXItem, getAllPostsLocale } from '../../utils/getPosts';

interface CaseProps {
  posts: MDXItem[];
}

const CasesIndex = ({ posts }: CaseProps) => {
  const { t } = useTranslation('cases');

  return (
    <Main
      meta={<Meta title={t('headTitle')} description={t('headDescription')} />}
    >
      <Header title="Cases">
        <p>{t('heroDescription')}</p>
      </Header>
      <Container big>
        <CasesWrapper>
          {posts.map((post, i) => (
            <CasePreview key={i} {...post} />
          ))}
        </CasesWrapper>
      </Container>
    </Main>
  );
};

export default CasesIndex;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const posts = await getAllPostsLocale(locale, 'cases');
  return {
    props: {
      posts,
      ...(await serverSideTranslations(locale as string, ['common', 'cases'])),
    },
  };
};
