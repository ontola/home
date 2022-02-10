import { GetStaticPaths, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { MDXRemote } from 'next-mdx-remote';

import { GradientLine } from '.';
import { Container } from '../../components/Container';
import { Details } from '../../components/Details';
import { Header } from '../../components/Header';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { MDXItem, getAllPaths, getPostBySlug } from '../../utils/getPosts';
import { buildComponents } from '../../utils/mdx';

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
  const blog = await getPostBySlug(pid as string, 'en', 'blog');
  return {
    props: {
      ...blog,
      ...(await serverSideTranslations(locale as string, ['common', 'home'])),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: await getAllPaths('blog'),
    fallback: false,
  };
};
