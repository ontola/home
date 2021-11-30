import { styled } from '@stitches/react';
import { GetStaticProps } from 'next';
import Link from 'next/link';

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
  borderRadius: '2rem',
  transition: '.2s box-shadow',
  marginLeft: '-2rem',
  '&:hover': {
    boxShadow: ' 0px 3px 15px rgba(0,0,0,0.2)',
  },
});

const Detail = styled('span', {
  color: '$text1',
});

const Line = styled('div', {
  background: '$gradient',
  height: '2px',
});

function BlogPostPreview({ data, slug }: BlogItemProp) {
  return (
    <Link href={`/blog/${slug}`} passHref>
      <BlogPostPreviewStyling>
        <Text as="h3">{data?.title}</Text>
        {data.description && <p>{data.description}</p>}
        <Line />
        <Detail>
          {new Date(data.date).toLocaleDateString()}
          {' - '}
          {data.author}
        </Detail>
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
  const posts = await getAllPostsLocale(locale);
  return {
    props: {
      posts,
    },
  };
};
