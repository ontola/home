import { styled } from '@stitches/react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { MDXRemote } from 'next-mdx-remote';

import { theme } from '../../stitches.config';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { TeamMember } from '../components/TeamMember';
import { team } from '../data/team';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { buildComponents } from '../utils/buildComponents';
import { MDXItem, getPage } from '../utils/getPosts';

const Members = styled('div', {
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fit, minmax(${theme.sizes.gridItemSmall}, 1fr))`,
  gridGap: '3rem',
  paddingTop: '3rem',
  marginBottom: '7rem',
});

export default function About({ mdxSource, data }: MDXItem) {
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
        <MDXRemote components={buildComponents()} {...mdxSource} />
        <h2>Ons Team</h2>
        <Members>
          {Object.keys(team).map((member) => (
            <TeamMember key={member} member={member} />
          ))}
        </Members>
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
  const aboutProps = await getPage('about', locale);
  return {
    props: {
      ...aboutProps,
      ...(await serverSideTranslations(locale as string, ['common', 'home'])),
    },
  };
};
