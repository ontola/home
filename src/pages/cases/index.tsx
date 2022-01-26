import { GetStaticProps } from 'next';

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
  return (
    <Main meta={<Meta title="Ontola Cases" description="Look at our cases" />}>
      <Header title="Cases">
        <p>
          Lees meer over de uiteenlopende opdrachten waar wij aan hebben
          gewerkt. Je zal je verbazen van wat er allemaal mogelijk is!
        </p>
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
    },
  };
};
