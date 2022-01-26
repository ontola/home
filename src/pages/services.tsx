import { GetStaticProps } from 'next';

import { Container } from '../components/Container';
import { FeatureBlock } from '../components/FeatureBlock';
import { Header } from '../components/Header';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { MDXItem, getPage } from '../utils/getPosts';

const servicesCount = [1, 2, 3];

export default function Services({ data }: MDXItem) {
  return (
    <Main meta={<Meta title={data.title} description={data.description} />}>
      <Header title={data.title} image={'photos/whiteboard.jpg'}>
        <p>{data.description}</p>
      </Header>
      <Container>
        {servicesCount.map((i) => (
          <FeatureBlock
            key={i}
            title={data[`${i}_title`]}
            description={data[`${i}_description`]}
            tools={data[`${i}_technologies`]}
            image={data[`${i}_image`]}
          />
        ))}
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
