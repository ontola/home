import { GetStaticPaths, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { MDXRemote } from 'next-mdx-remote';

import { CasePreview } from '../../components/CasePreview';
import { CasesWrapper } from '../../components/CasesWrapper';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { MDXItem, getAllPaths, getPostBySlug } from '../../utils/getPosts';
import { buildComponents } from '../../utils/mdx';

export default function ServicePost({ mdxSource, data, cases }: MDXItem) {
  return (
    <Main meta={<Meta title={data.title} description={data.description} />}>
      <Header title={data.title} image={data.image}>
        <p>{data.description}</p>
      </Header>
      <Container>
        <MDXRemote components={buildComponents()} {...mdxSource} />
      </Container>
      {cases && cases.length > 0 && (
        <Container big>
          <h2>Cases</h2>
          <CasesWrapper>
            {cases.map((c: MDXItem) => (
              <CasePreview key={c.slug} {...c} />
            ))}
          </CasesWrapper>
        </Container>
      )}
    </Main>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const pid = params && params.pid;
  const post = await getPostBySlug(pid as string, locale, 'services');
  if (post.data.cases) {
    const cases: MDXItem[] = [];
    await Promise.all(
      post.data.cases.map(async (id: string) =>
        cases.push(await getPostBySlug(id, locale, 'cases'))
      )
    );
    post.cases = cases;
  }
  return {
    props: {
      ...post,
      ...(await serverSideTranslations(locale as string, [
        'common',
        'services',
      ])),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: await getAllPaths('services'),
    fallback: false,
  };
};
