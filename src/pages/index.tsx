import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { BlogPostPreview, BlogsWrapper } from './blog';
import { ButtonLink } from '../components/Button';
import { CasePreview } from '../components/CasePreview';
import { CasesWrapper } from '../components/CasesWrapper';
import { Container } from '../components/Container';
import { FeatureBlock } from '../components/FeatureBlock';
import { Header } from '../components/Header';
import { SectionHeading } from '../components/SectionHeading';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { MDXItem, getAllPostsLocale } from '../utils/getPosts';
import { paths } from '../utils/paths';

interface HomeProps {
  cases: MDXItem[];
  blogs: MDXItem[];
}

const Home = ({ cases, blogs }: HomeProps) => {
  const { t } = useTranslation('home');

  return (
    <Main
      meta={<Meta title={t('headTitle')} description={t('headDescription')} />}
    >
      <Header title={t('heroTitle')}>
        <p>{t('heroDescription')}</p>
        <ButtonLink href={paths.about}>{t('aboutUs')}</ButtonLink>
      </Header>
      <Container>
        <FeatureBlock
          title={t('servicesTitle')}
          image={'photos/joep-arthur.jpg'}
        >
          <p>{t('servicesDescription')}</p>
          <ButtonLink href={paths.services}>{t('servicesButton')}</ButtonLink>
        </FeatureBlock>
      </Container>
      <Container big>
        <SectionHeading small={t('casesPre')} title={t('casesTitle')} />
        <CasesWrapper>
          {cases.map((caseData) => (
            <CasePreview key={caseData.slug} {...caseData} />
          ))}
        </CasesWrapper>
        <SectionHeading
          href={paths.blog}
          small={t('blogsPre')}
          title={t('blogsTitle')}
        />
        <BlogsWrapper>
          {blogs.slice(0, 3).map((blog) => (
            <BlogPostPreview key={blog.slug} {...blog} />
          ))}
        </BlogsWrapper>
      </Container>
    </Main>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      cases: await getAllPostsLocale(locale, 'cases'),
      // We only use EN blogs for now
      blogs: await getAllPostsLocale('en', 'blog'),
      ...(await serverSideTranslations(locale as string, ['common', 'home'])),
    },
  };
};

export default Home;
