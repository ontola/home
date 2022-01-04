import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';

import { GradientLine } from '.';
import { Container } from '../../components/Container';
import { Details } from '../../components/Details';
import { Header } from '../../components/Header';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { buildComponents } from '../../utils/buildComponents';
import { MDXItem, getAllPaths, getPostBySlug } from '../../utils/getPosts';

export default function BlogPost({ mdxSource, data }: MDXItem) {
  return (
    <Main meta={<Meta title={data.title} description={data.description} />}>
      <Header title={data.title}>
        <GradientLine />
        <Details {...data} />
      </Header>
      <Container>
        <MDXRemote components={buildComponents()} {...mdxSource} />
      </Container>
    </Main>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const pid = params && params.pid;
  const props = await getPostBySlug(pid as string, locale, 'blog');
  return {
    props,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: await getAllPaths('blog'),
    fallback: false,
  };
};
