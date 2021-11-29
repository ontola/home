import { GetStaticProps } from 'next';
import Link from 'next/link';

import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { BlogItemProp, getAllPosts } from '../../utils/getPosts';

interface BlogProps {
  posts: BlogItemProp[];
}

function BlogPostPreview({ content, data }: BlogItemProp) {
  return (
    <div>
      <Link href={`/blog/${data.slug}`} passHref>
        <h2>{data?.title}</h2>
      </Link>
      <p>{content}</p>
    </div>
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
      <h1>Blogs!</h1>
      <Link href="/blog/what-is-linked-data">What is linked data, yo</Link>
      {posts.map((post, i) => (
        <BlogPostPreview key={i} {...post} />
      ))}
    </Main>
  );
};

export default BlogsIndex;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const posts = getAllPosts(locale);
  return {
    props: {
      posts,
    },
  };
};
