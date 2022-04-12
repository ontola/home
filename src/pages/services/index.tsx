import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { styled } from '../../../stitches.config';
import { Container } from '../../components/Container';
import { FeatureBlock } from '../../components/FeatureBlock';
import { Header } from '../../components/Header';
import { TechPill } from '../../components/TechPill';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { MDXItem, getPage } from '../../utils/getPosts';

// Change this when you add a new service
const servicesCount = [1, 2, 3];

export const TechWrapperSmall = styled('div', {
  display: 'flex',
  flexDirection: 'row',
});

export default function Services({ data }: MDXItem) {
  return (
    <Main meta={<Meta title={data.title} description={data.description} />}>
      <Header title={data.title} image={'photos/joep-arthur.jpg'}>
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
                <TechWrapperSmall>
                  {data[`${i}_technologies`].map((t: string) => (
                    <TechPill key={t} technology={t} />
                  ))}
                </TechWrapperSmall>
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
    props: {
      ...(await serverSideTranslations(locale as string, ['common', 'home'])),
      ...props,
    },
  };
};
