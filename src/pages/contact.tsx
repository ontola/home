import { GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';

import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { BlogItemProp, getPage } from '../utils/getPosts';

export default function Contact({ mdxSource, data }: BlogItemProp) {
  const components = {
    Image,
  };

  return (
    <Main meta={<Meta title={data.title} description={data.description} />}>
      <Header title={data.title} image="whiteboard.jpg">
        <p>{data.description}</p>
      </Header>
      <Container>
        <MDXRemote components={components} {...mdxSource} />
      </Container>
    </Main>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const props = await getPage('contact', locale);
  return {
    props,
  };
};
