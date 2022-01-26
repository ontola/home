import { GetStaticProps } from 'next';
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
        <Link href={paths.contact} passHref>
          <ButtonLink>Contact</ButtonLink>
        </Link>
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
        <FeatureBlock
          title={'Full-service software development'}
          image={'photos/joep-arthur.jpg'}
        >
          <p>
            Als jouw full-service digitale partner begeleiden we het
            softwareontwikkelingsproces van begin tot levering en doorlopende
            ondersteuning. Met een team van gedreven software developers zorgen
            we ervoor dat het project op tijd en binnen het gestelde budget
            wordt opgeleverd.
          </p>
          <ButtonLink href={paths.services}>Onze diensten</ButtonLink>
        </FeatureBlock>
        <SectionHeading
          href={paths.blog}
          small="We delen graag onze kennis"
          title="Blogs"
        />
        {blogs.slice(0, 3).map((blog) => (
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
