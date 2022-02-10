import { GetStaticPaths, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { MDXRemote } from 'next-mdx-remote';

import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { MDXItem, getAllPaths, getPostBySlug } from '../../utils/getPosts';
import { buildComponents } from '../../utils/mdx';

export default function Case({ mdxSource, data, slug }: MDXItem) {
  return (
    <Main
      caseColor={data.color}
      meta={<Meta title={data.title} description={data.description} />}
    >
      <Header
        title={data.title}
        floatingImage={`/images/cases/${slug}_header.png`}
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
    props: {
      ...props,
      ...(await serverSideTranslations(locale as string, ['common', 'cases'])),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: await getAllPaths('cases'),
    fallback: false,
  };
};
