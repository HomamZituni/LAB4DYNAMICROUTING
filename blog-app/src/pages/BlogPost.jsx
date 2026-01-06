import { useParams, Link } from 'react-router-dom';
import { posts } from '../lib/posts';

export function BlogPost() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div style={{ padding: '2rem' }}>
        <h1>Post not found</h1>
        <Link to="/blog">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link to="/blog">Back to Blog</Link>
    </div>
  );
}