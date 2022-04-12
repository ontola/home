import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';

import { styled } from '../../../stitches.config';
import { ButtonLink } from '../../components/Button';
import { Container } from '../../components/Container';
import { FeatureBlock } from '../../components/FeatureBlock';
import { Header } from '../../components/Header';
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
  const { t } = useTranslation('services');

  return (
    <Main meta={<Meta title={data.title} description={data.description} />}>
      <Header title={data.title} image={'photos/joep-arthur.jpg'}>
        <p>{data.description}</p>
      </Header>
      <Container>
        {servicesCount.map((i) => {
          const service = {
            id: data[`${i}_id`],
            title: data[`${i}_title`],
            image: data[`${i}_image`],
            description: data[`${i}_description`],
            technologies: data[`${i}_technologies`],
          };
          return (
            <FeatureBlock key={i} title={service.title} image={service.image}>
              <p>{service.description}</p>
              {service.id && (
                <Link href={`services/${service.id}`} passHref>
                  <ButtonLink>{t('readMore')}</ButtonLink>
                </Link>
              )}
            </FeatureBlock>
          );
        })}
      </Container>
    </Main>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const props = await getPage('services', locale);
  return {
    props: {
      ...(await serverSideTranslations(locale as string, [
        'common',
        'services',
      ])),
      ...props,
    },
  };
};
