import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';

import { styled } from '../../../stitches.config';
import { CasePreview } from '../../components/CasePreview';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { buildComponents } from '../../utils/buildComponents';
import { MDXItem, getAllPaths, getPostBySlug } from '../../utils/getPosts';

const TechImg = styled('img', {
  width: '15rem',
  alignSelf: 'center',
  justifySelf: 'center',
  margin: 'auto',
});

export default function TechPosts({ mdxSource, data, cases, slug }: MDXItem) {
  return (
    <Main meta={<Meta title={data.title} description={data.description} />}>
      <Header
        title={data.title}
        customImage={<TechImg src={`/images/tech/${slug}.svg`} />}
      >
        <p>{data.description}</p>
      </Header>
      <Container>
        <MDXRemote components={buildComponents()} {...mdxSource} />
        {cases && (
          <>
            <h2>Voorbeelden:</h2>
            {cases.map((c: MDXItem) => (
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
    const cases: MDXItem[] = [];
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
