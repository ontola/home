import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { MDXRemote } from 'next-mdx-remote';

import styles from './about.module.css';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { TeamMember } from '../components/TeamMember';
import { team } from '../data/team';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { MDXItem, getPage } from '../utils/getPosts';
import { buildComponents } from '../utils/mdx';

export default function About({ mdxSource, data }: MDXItem) {
  return (
    <Main meta={<Meta title={data.title} description={data.description} />}>
      <Header
        title={data.title}
        customImage={
          <img
            className={styles.teamPhoto}
            alt="Ontola team"
            src="/images/photos/team.png"
          />
        }
      >
        <p>{data.description}</p>
      </Header>
      <Container>
        <MDXRemote components={buildComponents()} {...mdxSource} />
        <h2>Team</h2>
        <div className={styles.members}>
          {Object.keys(team).map((member) => (
            <TeamMember key={member} member={member} />
          ))}
        </div>
      </Container>
    </Main>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const aboutProps = await getPage('about', locale);
  return {
    props: {
      ...aboutProps,
      ...(await serverSideTranslations(locale as string, ['common', 'home'])),
    },
  };
};
