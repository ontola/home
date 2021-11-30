import { styled } from '@stitches/react';
import { GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import Link from 'next/link';

import { Header } from '../../components/Header';
import { Text } from '../../components/Text';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { BlogItemProp, getAllPosts } from '../../utils/getPosts';

interface BlogProps {
  posts: BlogItemProp[];
}

const BlogPostPreviewStyling = styled('a', {
  maxWidth: '20rem',
  display: 'block',
  textDecoration: 'none',
  padding: '2rem',
  borderRadius: '2rem',
  transition: '.2s box-shadow',
  marginLeft: '-2rem',
  marginTop: '-2rem',
  '&:hover': {
    boxShadow: ' 0px 3px 15px rgba(0,0,0,0.2)',
  },
});

function BlogPostPreview({ data, mdxSource, slug }: BlogItemProp) {
  return (
    <Link href={`/blog/${slug}`} passHref>
      <BlogPostPreviewStyling>
        <Text as="h3">{data?.title}</Text>
        <MDXRemote {...mdxSource} />
        <Text>{new Date(data.date).toLocaleDateString()}</Text>
        <Text>{data.author}</Text>
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
      {posts.map((post, i) => (
        <BlogPostPreview key={i} {...post} />
      ))}
    </Main>
  );
};

export default BlogsIndex;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const posts = await getAllPosts(locale);
  return {
    props: {
      posts,
    },
  };
};
