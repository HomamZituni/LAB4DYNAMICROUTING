 import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav style={{ padding: '1rem', background: '#333', color: 'white', display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <Link to="/" style={{ marginRight: '1rem', color: 'white' }}>Home</Link>
      <Link to="/blog" style={{ marginRight: '1rem', color: 'white' }}>Blog</Link>
      
      {isAuthenticated ? (
        <>
          <Link to="/admin" style={{ marginRight: '1rem', color: 'white' }}>Admin</Link>
          <button onClick={logout}>Log Out</button>
        </>
      ) : (
        <Link to="/login" style={{ color: 'white' }}>Log In</Link>
      )}
    </nav>
  );
}