import React from 'react';

import { GetStaticProps } from 'next';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import styles from './index.module.css';
import { Details } from '../../components/Details';
import { Header } from '../../components/Header';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { MDXItem, getAllPostsLocale } from '../../utils/getPosts';

interface BlogProps {
  posts: MDXItem[];
}

export function BlogPostPreview({ data, slug }: MDXItem) {
  return (
    <Link href={`/blog/${slug}`} locale="en" passHref>
      <a className={styles.postPreview}>
        <h3>{data?.title}</h3>
        {data.description && <p>{data.description}</p>}
        <div className={styles.bottom}>
          <div className={styles.gradientLine} />
          <Details {...data} />
        </div>
      </a>
    </Link>
  );
}

export const BlogsWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.blogsWrapper}>{children}</div>
);

export const GradientLine = () => <div className={styles.gradientLine} />;

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
      <div className={styles.blogsWrapper}>
        {posts.map((post, i) => (
          <BlogPostPreview key={i} {...post} />
        ))}
      </div>
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
