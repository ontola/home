import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Image from 'next/image';

import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { getPostBySlug } from '../../utils/getPosts';

interface BlogPostProps {
  content: MDXRemoteSerializeResult<Record<string, unknown>>;
}

export default function BlogPost({ content }: BlogPostProps) {
  const components = {
    Image,
  };

  return (
    <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
      <h1>blog title</h1>
      <MDXRemote components={components} {...content} />
    </Main>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const pid = params && params.pid;
  const { content, meta } = getPostBySlug(pid as string, locale);
  const mdxSource = await serialize(content);
  return {
    props: {
      content: mdxSource,
      meta,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { pid: 'what-is-linked-data' }, locale: 'en' },
      { params: { pid: 'what-is-linked-data' }, locale: 'nl' },
      { params: { pid: 'demo' }, locale: 'en' },
    ],
    fallback: false,
  };
};
