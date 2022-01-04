import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';

import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { buildComponents } from '../../utils/buildComponents';
import { MDXItem, getAllPaths, getPostBySlug } from '../../utils/getPosts';

export default function Case({ mdxSource, data, slug }: MDXItem) {
  return (
    <Main
      caseColor={data.color}
      meta={<Meta title={data.title} description={data.description} />}
    >
      <Header
        title={data.title}
        customImage={
          <img
            style={{
              height: '24rem',
              marginBottom: '-21rem',
              position: 'absolute',
              right: 0,
            }}
            src={`/images/cases/header_${slug}.png`}
            alt="Cases"
          />
        }
      >
        <p>{data.description}</p>
      </Header>
      <Container>
        <MDXRemote components={buildComponents()} {...mdxSource} />
      </Container>
    </Main>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const pid = params && params.pid;
  const props = await getPostBySlug(pid as string, locale, 'cases');
  return {
    props,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: await getAllPaths('cases'),
    fallback: false,
  };
};
