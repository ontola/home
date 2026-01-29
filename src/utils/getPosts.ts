/** This project finds documents from the `/src/content` directory. Page Types are stored in subfolders. */

import fs from 'fs';
import path from 'path';
import { ParsedUrlQuery } from 'querystring';

import matter from 'gray-matter';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeHighlight from 'rehype-highlight';

const pageDirectory = path.join(process.cwd(), '/content');
const getDirectory = (sub: string) =>
  path.join(process.cwd(), `/content/${sub}`);

/** Markdown metadata fields */
export interface MetaData {
  /** Author string e.g. `joep` */
  author: string;
  title: string;
  /** When it was published */
  date: string;
  [key: string]: any;
}

/** MDX Item from the Content folder */
export interface MDXItem extends matter.GrayMatterFile<string> {
  /** Cases relevant to this item */
  cases?: MDXItem[];
  /** Should be passed to an MDX component like this: {...mdxSource} */
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>;
  /** last characters of the path of the URL, e.g. `linked-data-is-cool` */
  slug: string;
  /** information from the .mdx header  */
  data: MetaData;
}
/** Reads the filesystem, finds the folder for the type, returns MDX serialized resource */
export async function getPostBySlug(
  slug: string,
  /* eslint-disable default-param-last */
  locale = 'en',
  /** e.g. `blog` */
  type: string
): Promise<MDXItem> {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(getDirectory(type), `${realSlug}.${locale}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const post = matter(fileContents);
  const out: any = post;
  out.slug = realSlug;
  out.orig = '';
  out.mdxSource = await serialize(out.content, {
    mdxOptions: {
      rehypePlugins: [
        // @ts-ignore - rehype-highlight types don't match
        rehypeHighlight,
      ],
    },
  });
  return out;
}

/** Generates a list of all posts. Does not construct markdown content */
export async function getAllPostsLocale(
  locale = 'en',
  type = 'blog'
): Promise<MDXItem[]> {
  const dir = getDirectory(type);
  const filenames = fs.readdirSync(dir);
  const files: MDXItem[] = [];
  await Promise.all(
    filenames.map(async (name) => {
      const fullPath = path.join(dir, name);
      if (name.includes(`${locale}.mdx`)) {
        const post = matter(fs.readFileSync(fullPath, 'utf8')) as MDXItem;
        // The `orig` byte array causes JSON serialization errors
        post.orig = '';

        // We don't need a markdown representation
        // const truncated = post.content.slice(0, 300);
        // post.mdxSource = await serialize(truncated);

        // eslint-disable-next-line
        const { content, orig, ...rest } = post as any;
        files.push({ ...rest, slug: name.slice(0, -7) } as MDXItem);
      }
    })
  );
  files.sort((a, b) => {
    return a.data.date > b.data.date ? -1 : 1;
  });
  return files;
}

/** Gets a localized .mdx file from the `content` folder */
export async function getPage(slug: string, locale = 'en') {
  const fullPath = path.join(pageDirectory, `${slug}.${locale}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const post = matter(fileContents);
  const out: any = post;
  // The `orig` byte array causes JSON serialization errors
  out.orig = '';
  out.slug = slug;
  out.mdxSource = await serialize(post.content);
  return out;
}

/** Returns an array of Paths for `getStaticPaths`, includes all languages */
export async function getAllPaths(
  /** E.g. `blog` */
  type: string
) {
  const paths: (
    | string
    | {
        params: ParsedUrlQuery;
        locale?: string | undefined;
      }
  )[] = [];

  const en = await getAllPostsLocale('en', type);
  en.forEach((a) => {
    paths.push({
      params: {
        pid: a.slug,
      },
      locale: 'en',
    });
  });
  const nl = await getAllPostsLocale('nl', type);
  nl.forEach((a) => {
    paths.push({
      params: {
        pid: a.slug,
      },
      locale: 'nl',
    });
  });
  return paths;
}
