import { ParsedUrlQuery } from 'querystring';

import { styled } from '@stitches/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import Image, { ImageProps } from 'next/image';

import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import {
  BlogItemProp,
  getAllPostsLocale,
  getPostBySlug,
} from '../../utils/getPosts';

const ImageWrapper = styled('div', {
  // display: 'block',
  // width: '100%',
  // height: '100%',
  // height: '10rem',
  // overflow: 'hidden',
  position: 'relative',
});

export default function BlogPost({ mdxSource, data }: BlogItemProp) {
  const components = {
    img: (props: ImageProps) => {
      return (
        // height and width are part of the props, so they get automatically passed here with {...props}
        <ImageWrapper>
          <Image
            {...props}
            objectFit="contain"
            // objectPosition="center"
            height={'100'}
            width={'200'}
            layout="responsive"
            loading="lazy"
            alt={props.alt}
          />
        </ImageWrapper>
      );
    },
  };

  return (
    <Main meta={<Meta title={data?.title} description={data?.description} />}>
      <Header title={data?.title}></Header>
      <Container>
        <MDXRemote components={components} {...mdxSource} />
      </Container>
    </Main>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const pid = params && params.pid;
  const props = await getPostBySlug(pid as string, locale);
  return {
    props,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: (
    | string
    | {
        params: ParsedUrlQuery;
        locale?: string | undefined;
      }
  )[] = [];
  const en = await getAllPostsLocale('en');
  en.forEach((a) => {
    paths.push({
      params: {
        pid: a.slug,
      },
      locale: 'en',
    });
  });
  const nl = await getAllPostsLocale('nl');
  nl.forEach((a) => {
    console.log('a', a);
    paths.push({
      params: {
        pid: a.slug,
      },
      locale: 'nl',
    });
  });

  return {
    paths,
    fallback: false,
  };
};
