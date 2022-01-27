import { GetStaticProps } from 'next';

import { styled } from '../../stitches.config';
import { Container } from '../components/Container';
import { FeatureBlock } from '../components/FeatureBlock';
import { Header } from '../components/Header';
import { TechPill } from '../components/TechPill';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { MDXItem, getPage } from '../utils/getPosts';

const servicesCount = [1, 2, 3];

const ToolsWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
});

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
            image={data[`${i}_image`]}
          >
            {data[`${i}_technologies`] && (
              <>
                <p>{data[`${i}_description`]}</p>
                <ToolsWrapper>
                  {data[`${i}_technologies`].map((t: string) => (
                    <TechPill key={t} technology={t} />
                  ))}
                </ToolsWrapper>
              </>
            )}
          </FeatureBlock>
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
