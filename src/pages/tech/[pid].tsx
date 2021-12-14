import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';

import { CasePreview } from '../../components/CasePreview';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { buildComponents } from '../../utils/buildComponents';
import { BlogItemProp, getAllPaths, getPostBySlug } from '../../utils/getPosts';

export default function TechPosts({ mdxSource, data, cases }: BlogItemProp) {
  return (
    <Main meta={<Meta title={data.title} description={data.description} />}>
      <Header title={data.title} image={data.image}>
        <p>{data.description}</p>
      </Header>
      <Container>
        <MDXRemote components={buildComponents()} {...mdxSource} />
        {cases && (
          <>
            <h2>Voorbeelden:</h2>
            {cases.map((c: BlogItemProp) => (
              <CasePreview key={c.slug} {...c} />
            ))}
          </>
        )}
      </Container>
    </Main>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const pid = params && params.pid;
  const props = await getPostBySlug(pid as string, locale, 'tech');
  if (props.data.cases) {
    const cases: BlogItemProp[] = [];
    await Promise.all(
      props.data.cases.map(async (id: string) =>
        cases.push(await getPostBySlug(id, locale, 'cases'))
      )
    );
    props.cases = cases;
  }
  return {
    props,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: await getAllPaths('tech'),
    fallback: false,
  };
};
