import { GetStaticPaths, GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next/pages';
import { serverSideTranslations } from 'next-i18next/pages/serverSideTranslations';
import { MDXRemote } from 'next-mdx-remote';

import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { VacancyInfo } from '../../components/VacancyInfo';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { MDXItem, getAllPaths, getPostBySlug } from '../../utils/getPosts';
import { buildComponents } from '../../utils/mdx';

export default function Vacature({ mdxSource, data }: MDXItem) {
  const { t } = useTranslation('jobs');

  return (
    <Main meta={<Meta title={data.title} description={data.description} />}>
      <Header title={data.title}>
        <p>{data.description}</p>
      </Header>

      <Container>
        <MDXRemote components={buildComponents()} {...mdxSource} />
        <VacancyInfo />
        <br />
        <a href="mailto:jobs@ontola.io" style={{ textDecoration: 'none' }}>
          <Button>{t('apply')}</Button>
        </a>
      </Container>
    </Main>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const pid = params && params.pid;
  const props = await getPostBySlug(pid as string, locale, 'jobs');

  return {
    props: {
      ...props,
      ...(await serverSideTranslations(locale as string, ['common', 'jobs'])),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: await getAllPaths('jobs'),
    fallback: false,
  };
};
