import { GetStaticProps } from 'next';

import { Container } from '../components/Container';
import { FeatureBlock } from '../components/FeatureBlock';
import { Header } from '../components/Header';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { BlogItemProp, getPage } from '../utils/getPosts';

export default function Services({ data }: BlogItemProp) {
  return (
    <Main meta={<Meta title={data.title} description={data.description} />}>
      <Header title={data.title} image="whiteboard.jpg">
        <p>{data.description}</p>
      </Header>
      <Container>
        <h2>Digitale producten die klaar zijn voor de toekomst</h2>
        <FeatureBlock
          title={data['1_title']}
          description={data['1_description']}
          tools={data['1_technologies']}
          image={data['1_image']}
        />
        <FeatureBlock
          title={data['2_title']}
          description={data['2_description']}
          tools={data['2_technologies']}
          image={data['2_image']}
          inverted
        />
        <FeatureBlock
          title={data['3_title']}
          description={data['3_description']}
          tools={data['3_technologies']}
          image={data['3_image']}
        />
      </Container>
    </Main>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const props = await getPage('services', locale);
  return {
    props,
  };
};
