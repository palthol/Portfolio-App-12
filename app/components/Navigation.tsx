import { Link } from 'react-router'; // Fix the import
import { motion } from 'framer-motion';

interface NavigationProps {
  isMobile?: boolean;
  onItemClick?: () => void;
}

export default function Navigation({ isMobile = false, onItemClick }: NavigationProps) {
  const navItems = ["Home", "About", "Projects", "Contact"];
  
  return (
    <nav className={isMobile ? "flex flex-col space-y-4" : "hidden md:flex items-center space-x-8"}>
      {navItems.map((item, index) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <Link 
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className={`relative font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors ${isMobile ? "py-2" : ""}`}
            onClick={onItemClick}
          >
            {item}
            {!isMobile && (
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all group-hover:w-full"></span>
            )}
          </Link>
        </motion.div>
      ))}
    </nav>
  );
}