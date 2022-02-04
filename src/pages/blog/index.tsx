import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';

import { styled, theme } from '../../../stitches.config';
import { Details } from '../../components/Details';
import { Header } from '../../components/Header';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { MDXItem, getAllPostsLocale } from '../../utils/getPosts';

interface BlogProps {
  posts: MDXItem[];
}

const BlogPostPreviewStyling = styled('a', {
  maxWidth: 'fit-content(200px)',
  display: 'flex',
  flexDirection: 'column',
  textDecoration: 'none',
  padding: '1rem',
  borderRadius: theme.sizes.radius,
  transition: '.2s box-shadow, .2s background, .2s border',
  marginLeft: '-1rem',
  marginBottom: '2rem',
  border: '1px solid $bg',
  borderColor: theme.colors.bg0,

  '&:hover': {
    background: '$bg0',
    borderColor: theme.colors.bg2,
  },

  '&:active': {
    transition: '0 all',
    borderColor: theme.colors.text,
  },
  h3: {
    marginTop: 0,
  },
});

export const Bottom = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifySelf: 'flex-end',
  flex: 1,
  justifyContent: 'flex-end',
});

export const GradientLine = styled('div', {
  display: 'block',
  background: '$gradient',
  height: '2px',
  width: '100%',
});

export function BlogPostPreview({ data, slug }: MDXItem) {
  return (
    <Link href={`/blog/${slug}`} locale="en" passHref>
      <BlogPostPreviewStyling>
        <h3>{data?.title}</h3>
        {data.description && <p>{data.description}</p>}
        <Bottom>
          <GradientLine />
          <Details {...data} />
        </Bottom>
      </BlogPostPreviewStyling>
    </Link>
  );
}

export const BlogsWrapper = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(17rem, 1fr))',
  maxWidth: theme.sizes.containerBig,
  margin: 'auto',
  padding: '1rem',
  gap: '2rem',
});

const BlogsIndex = ({ posts }: BlogProps) => {
  return (
    <Main
      meta={
        <Meta
          title="Ontola Linked Data Blog"
          description="Blog posts on building software with RDF and linked data."
        />
      }
    >
      <Header title="Linked Data Blog" />
      <BlogsWrapper>
        {posts.map((post, i) => (
          <BlogPostPreview key={i} {...post} />
        ))}
      </BlogsWrapper>
    </Main>
  );
};

export default BlogsIndex;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const posts = await getAllPostsLocale('en');
  return {
    props: {
      posts,
      ...(await serverSideTranslations(locale as string, ['common', 'home'])),
    },
  };
};
