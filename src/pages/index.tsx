import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';

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
import { BlogPostPreview, BlogsWrapper } from './blog';

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
        <Link href={paths.contact} passHref>
          <ButtonLink>Contact</ButtonLink>
        </Link>
      </Header>
      <Container big>
        <FeatureBlock
          title={t('servicesTitle')}
          image={'photos/joep-arthur.jpg'}
        >
          <p>{t('servicesDescription')}</p>
          <Link href={paths.services} passHref>
            <ButtonLink href={paths.services}>{t('servicesButton')}</ButtonLink>
          </Link>
        </FeatureBlock>
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
