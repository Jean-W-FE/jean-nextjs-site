import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export default async function BlogPost({ params }: { params: { locale: string, slug: string } }) {
  const filePath = path.join(process.cwd(), 'src/content/posts', params.locale, `${params.slug}.md`);
  const file = fs.readFileSync(filePath, 'utf8');
  const { content } = matter(file);
  const html = marked(content);

  return (
    <main>
      <article dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}
