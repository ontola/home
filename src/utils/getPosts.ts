import fs from 'fs';
import path from 'path';

import matter, { GrayMatterFile } from 'gray-matter';

const docsDirectory = path.join(process.cwd(), '/src/content/blog');

export function getPostBySlug(slug: string, locale = 'en') {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(docsDirectory, `${realSlug}.${locale}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { content, data } = matter(fileContents);

  return { slug: realSlug, meta: data, content };
}

export type BlogItemProp = matter.GrayMatterFile<string>;

export function getAllPosts(locale = 'en'): BlogItemProp[] {
  const filenames = fs.readdirSync(docsDirectory);
  const files: GrayMatterFile<string>[] = [];
  filenames.forEach((name) => {
    const fullPath = path.join(docsDirectory, name);
    if (name.includes(`${locale}.mdx`)) {
      const post = matter(fs.readFileSync(fullPath, 'utf8'));
      // The `orig` byte array causes JSON serialization errors
      post.orig = '';
      post.data.slug = name.slice(0, -7);
      files.push(post);
    }
  });
  return files;
}
