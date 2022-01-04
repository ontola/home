import { GetStaticProps } from 'next';

import { Container } from '../components/Container';
import { FeatureBlock } from '../components/FeatureBlock';
import { Header } from '../components/Header';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { MDXItem, getPage } from '../utils/getPosts';

const processSteps = [1, 2, 3, 4, 5];

export default function Process({ data }: MDXItem) {
  return (
    <Main meta={<Meta title={data.title} description={data.description} />}>
      <Header title={data.title} image="photos/whiteboard.jpg">
        <p>{data.description}</p>
      </Header>
      <Container>
        {processSteps.map((i) => {
          return (
            <FeatureBlock
              key={i}
              number={i}
              title={data[`${i}_title`]}
              description={data[`${i}_description`]}
              image={data[`${i}_image`]}
            />
          );
        })}
      </Container>
    </Main>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const props = await getPage('process', locale);
  return {
    props,
  };
};
