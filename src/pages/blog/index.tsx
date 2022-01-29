import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';

import { styled, theme } from '../../../stitches.config';
import { Container } from '../../components/Container';
import { Details } from '../../components/Details';
import { Header } from '../../components/Header';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { MDXItem, getAllPostsLocale } from '../../utils/getPosts';

interface BlogProps {
  posts: MDXItem[];
}

const BlogPostPreviewStyling = styled('a', {
  maxWidth: '30rem',
  display: 'block',
  textDecoration: 'none',
  padding: '1rem',
  borderRadius: theme.sizes.radius,
  transition: '.2s box-shadow, .2s background',
  marginLeft: '-1rem',
  '&:hover': {
    background: '$bg0',
    boxShadow: '$button',
  },
  h3: {
    marginTop: 0,
  },
});

export const GradientLine = styled('div', {
  display: 'block',
  background: '$gradient',
  height: '2px',
  width: '100%',
});

export function BlogPostPreview({ data, slug }: MDXItem) {
  return (
    <Link href={`/blog/${slug}`} passHref>
      <BlogPostPreviewStyling>
        <h3>{data?.title}</h3>
        {data.description && <p>{data.description}</p>}
        <GradientLine />
        <Details {...data} />
      </BlogPostPreviewStyling>
    </Link>
  );
}

const BlogsIndex = ({ posts }: BlogProps) => {
  return (
    <Main
      meta={
        <Meta
          title="Ontola Linked Data Blog"
          description="Wij schrijven software die ontworpen is om te veranderen. Zo blijven de kosten voor onderhoud en doorontwikkeling zo laag mogelijk."
        />
      }
    >
      <Header title="Linked Data Blog" />
      <Container style={{ marginBottom: '3rem' }}>
        {posts.map((post, i) => (
          <BlogPostPreview key={i} {...post} />
        ))}
      </Container>
    </Main>
  );
};

export default BlogsIndex;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const posts = await getAllPostsLocale(locale);
  return {
    props: {
      posts,
      ...(await serverSideTranslations(locale as string, ['common', 'home'])),
    },
  };
};
