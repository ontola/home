import { styled } from '@stitches/react';
import { GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';

import { Container } from '../components/Container';
import { FeatureBlock } from '../components/FeatureBlock';
import { Header } from '../components/Header';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { MDXItem, getPage } from '../utils/getPosts';

export default function About({ mdxSource, data }: MDXItem) {
  const components = {
    Image,
    FeatureBlock,
  };

  return (
    <Main meta={<Meta title={data.title} description={data.description} />}>
      <Header
        title={data.title}
        customImage={
          <TeamPhoto alt="Ontola teamfoto" src="/images/photos/team.png" />
        }
      >
        <p>{data.description}</p>
      </Header>
      <Container>
        <MDXRemote components={components} {...mdxSource} />
      </Container>
    </Main>
  );
}

const TeamPhoto = styled('img', {
  width: '100%',
  flex: 1,
  '@media (min-width: 600px)': {
    width: '1rem',
  },
  '@media (min-width: 900px)': {
    marginRight: '-5rem',
  },
  '@media (min-width: 1200px)': {
    marginRight: '-10rem',
    marginTop: '-5rem',
  },
});

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const props = await getPage('about', locale);
  return {
    props,
  };
};
