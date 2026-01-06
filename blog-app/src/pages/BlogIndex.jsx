import { Link } from 'react-router-dom';
import { posts } from '../lib/posts';

export function BlogIndex() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id} style={{ marginBottom: '1rem' }}>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
