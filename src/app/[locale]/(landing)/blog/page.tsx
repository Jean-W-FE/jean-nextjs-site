import fs from 'fs';
import path from 'path';

export default async function BlogList({ params: { locale } }: { params: { locale: string } }) {
  const postsPath = path.join(process.cwd(), 'src/content/posts', locale);
  const files = fs.readdirSync(postsPath);
  const posts = files.map(file => file.replace(/\.md$/, ''));
  
  return (
    <main>
      <h1>Blog</h1>
      <ul>
        {posts.map(slug => (
          <li key={slug}>
            <a href={`/${locale}/blog/${slug}`}>{slug}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
