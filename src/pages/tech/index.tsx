import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { styled, theme } from '../../../stitches.config';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { TechPill } from '../../components/TechPill';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { MDXItem, getAllPostsLocale } from '../../utils/getPosts';

interface CaseProps {
  posts: MDXItem[];
}

const TechWrapper = styled('div', {
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fit, minmax(${theme.sizes.gridItemSmall}, 1fr))`,
  gridAutoRows: theme.sizes.gridItemSmall,
  gridGap: '1rem',
  paddingTop: '3rem',
  marginBottom: '7rem',
});

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
