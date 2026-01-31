import Link from 'next/link';

// Helper to parse basic markdown links [text](url)
const renderDescription = (text: string) => {
  if (!text) return null;
  // Split by finding markdown links
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);

  return (
    <p>
      {parts.map((part, index) => {
        const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (match) {
          return (
            <Link key={index} href={match[2] as string}>
              {match[1]}
            </Link>
          );
        }
        return part;
      })}
    </p>
  );
};


import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import styles from './index.module.css';
import { ButtonLink } from '../../components/Button';
import { Container } from '../../components/Container';
import { FeatureBlock } from '../../components/FeatureBlock';
import { Header } from '../../components/Header';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { MDXItem, getPage } from '../../utils/getPosts';

// Change this when you add a new service
// Change this when you add a new service
const servicesCount = [0, 1, 2, 3, 4];

export const TechWrapperSmall = ({
  children,
}: {
  children: React.ReactNode;
}) => <div className={styles.techWrapperSmall}>{children}</div>;

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
            link: data[`${i}_link`], // Support custom link
          };

          // Determine the href: custom link takes precedence, then internal service page if ID exists
          const href = service.link || (service.id ? `services/${service.id}` : null);

          if (!service.title) return null;

          return (
            <FeatureBlock key={i} title={service.title} image={service.image}>
              {renderDescription(service.description)}
              {href && (
                <ButtonLink href={href}>
                  {service.link ? t('readMoreTech', 'View Technology') : t('readMore')}
                </ButtonLink>
              )}
            </FeatureBlock>
          );
        })}
      </Container>
      <Container>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ButtonLink href="/contact" variant="primary">
            {t('common:contact')}
          </ButtonLink>
        </div>
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
