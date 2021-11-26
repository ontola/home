import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

export default function getDocBySlug(slug: string, locale = 'us') {
  const docsDirectory = path.join(process.cwd(), '/src/content');
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(docsDirectory, slug, `${realSlug}.${locale}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { content, data } = matter(fileContents);

  return { slug: realSlug, meta: data, content };
}
