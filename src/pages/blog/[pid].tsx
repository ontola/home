import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';

import { Text } from '../../components/Text';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { BlogItemProp, getPostBySlug } from '../../utils/getPosts';

export default function BlogPost({ mdxSource, data }: BlogItemProp) {
  const components = {
    Image,
  };

  return (
    <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
      <Text as="h1">{data?.title}</Text>
      <MDXRemote components={components} {...mdxSource} />
    </Main>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const pid = params && params.pid;
  const props = await getPostBySlug(pid as string, locale);
  return {
    props,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      // TODO: generate these by reading files
      { params: { pid: 'what-is-linked-data' }, locale: 'en' },
      { params: { pid: 'what-is-linked-data' }, locale: 'nl' },
      { params: { pid: 'linked-data-surveys' }, locale: 'en' },
    ],
    fallback: false,
  };
};
