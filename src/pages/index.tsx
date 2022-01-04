import { GetStaticProps } from 'next';

import { HeaderButton } from '../components/Button';
import { CasePreview } from '../components/CasePreview';
import { CasesWrapper } from '../components/CasesWrapper';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { SectionHeading } from '../components/SectionHeading';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { MDXItem, getAllPostsLocale } from '../utils/getPosts';
import { BlogPostPreview } from './blog';

interface HomeProps {
  cases: MDXItem[];
  blogs: MDXItem[];
}

const Home = ({ cases, blogs }: HomeProps) => {
  return (
    <Main
      meta={
        <Meta
          title="Ontola Software Development"
          description="Wij schrijven software die ontworpen is om te veranderen. Zo blijven de kosten voor onderhoud en doorontwikkeling zo laag mogelijk."
        />
      }
    >
      <Header title={'Software Development'}>
        <p>
          Wij schrijven software die ontworpen is om te veranderen. Zo blijven
          de kosten voor onderhoud en doorontwikkeling zo laag mogelijk.
        </p>
        <HeaderButton>Contact</HeaderButton>
      </Header>
      <Container big>
        <SectionHeading
          small="Onze diensten"
          title="Digitale oplossingen die klaar zijn voor de toekomst"
        />
        <SectionHeading small="Ons werk" title="Cases" />
        <CasesWrapper>
          {cases.map((caseData) => (
            <CasePreview key={caseData.slug} {...caseData} />
          ))}
        </CasesWrapper>
        <SectionHeading small="We delen graag onze kennis" title="Blogs" />
        {blogs.map((blog) => (
          <BlogPostPreview key={blog.slug} {...blog} />
        ))}
      </Container>
    </Main>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      cases: await getAllPostsLocale(locale, 'cases'),
      blogs: await getAllPostsLocale(locale, 'blog'),
    },
  };
};

export default Home;
