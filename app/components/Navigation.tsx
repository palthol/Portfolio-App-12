import { Link } from 'react-router';        
export function Navigation() {
  return (
    <nav className="flex space-x-4">
      <Link to="/" className="text-blue-600 hover:underline">
        Landing
      </Link>
      <Link to="/about" className="text-blue-600 hover:underline">
        About Me
      </Link>
      <Link to="/projects" className="text-blue-600 hover:underline">
        Portfolio
      </Link>
      <Link to="/contact" className="text-blue-600 hover:
      underline">
        Contact
      </Link>
    </nav>
  );
}