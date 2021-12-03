import { styled } from '@stitches/react';
import { GetStaticProps } from 'next';
import Link from 'next/link';

import { theme } from '../../../stitches.config';
import { Container } from '../../components/Container';
import { Details } from '../../components/Details';
import { Header } from '../../components/Header';
import { Text } from '../../components/Text';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { BlogItemProp, getAllPostsLocale } from '../../utils/getPosts';

interface BlogProps {
  posts: BlogItemProp[];
}

const BlogPostPreviewStyling = styled('a', {
  maxWidth: '30rem',
  display: 'block',
  textDecoration: 'none',
  padding: '2rem',
  borderRadius: theme.sizes.radius,
  transition: '.2s box-shadow, .2s background',
  marginLeft: '-2rem',
  '&:hover': {
    background: '$bg0',
    boxShadow: '$button',
  },
});

export const GradientLine = styled('div', {
  display: 'block',
  background: '$gradient',
  height: '2px',
  width: '100%',
});

function BlogPostPreview({ data, slug }: BlogItemProp) {
  return (
    <Link href={`/blog/${slug}`} passHref>
      <BlogPostPreviewStyling>
        <Text as="h3">{data?.title}</Text>
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
      <Header title="linked data blog" />
      <Container>
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
    },
  };
};
