import { styled } from '@stitches/react';
import { GetStaticProps } from 'next';
import Link from 'next/link';

import { theme } from '../../../stitches.config';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { BlogItemProp, getAllPostsLocale } from '../../utils/getPosts';

interface CaseProps {
  posts: BlogItemProp[];
}

const CaseStyling = styled('a', {
  maxWidth: '30rem',
  display: 'block',
  textDecoration: 'none',
  '*': {
    color: 'white',
  },
  padding: '2rem',
  borderRadius: theme.sizes.radius,
  transition: '.2s box-shadow, .2s background',
  marginLeft: '-2rem',
  '&:hover': {
    background: '$bg0',
    boxShadow: '$button',
  },
});

export const GradientLine = styled('div', {
  display: 'block',
  background: '$gradient',
  height: '2px',
  width: '100%',
});

function Case({ data, slug }: BlogItemProp) {
  return (
    <Link href={`/cases/${slug}`} passHref>
      <CaseStyling style={{ background: data.color }}>
        <h3>{data?.title}</h3>
        {data.description && <p>{data.description}</p>}
      </CaseStyling>
    </Link>
  );
}

const CasesIndex = ({ posts }: CaseProps) => {
  return (
    <Main meta={<Meta title="Ontola Cases" description="Look at our cases" />}>
      <Header title="Cases" />
      <Container>
        {posts.map((post, i) => (
          <Case key={i} {...post} />
        ))}
      </Container>
    </Main>
  );
};

export default CasesIndex;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const posts = await getAllPostsLocale(locale, 'cases');
  return {
    props: {
      posts,
    },
  };
};
