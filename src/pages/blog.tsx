import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Image from 'next/image';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import getDocBySlug from '../utils/getDocBySlug';

export default function Blog({ content }) {
  const components = {
    Image,
  };

  return (
    <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
      <MDXRemote components={components} {...content} />
    </Main>
  );
}

export async function getStaticProps({ locale }) {
  const { content, meta } = getDocBySlug('blog', locale);
  const mdxSource = await serialize(content);
  return {
    props: {
      content: mdxSource,
      meta,
    },
  };
}
