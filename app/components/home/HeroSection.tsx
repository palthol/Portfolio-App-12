import { Link } from "react-router";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Hello, I'm <span className="text-gray-800 dark:text-white">Palth</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
            Full Stack Developer & UI/UX Designer
          </h2>
          
          <p className="text-lg mb-8 text-gray-600 dark:text-gray-400 max-w-2xl">
            I create elegant, responsive, and user-friendly web applications 
            with modern technologies. Let's build something amazing together.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/projects" 
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
            >
              View My Work
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-white hover:bg-gray-100 text-indigo-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-indigo-400 border border-indigo-600 rounded-lg font-medium transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}