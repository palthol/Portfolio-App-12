import { useEffect } from "react";
import { Link } from "@remix-run/react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Featured Projects */}
      <FeaturedProjects />
      
      {/* Skills Section */}
      <SkillsShowcase />
      
      {/* CTA Section */}
      <ContactCTA />
    </div>
  );
}

function HeroSection() {
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
            Hello, I'm <span className="text-gray-800 dark:text-white">Your Name</span>
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

function FeaturedProjects() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <motion.div 
              key={item}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Project {item}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Short description of this amazing project and the technologies used.
                </p>
                <div className="flex justify-between">
                  <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline">View Project</a>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:underline flex items-center">
                    GitHub
                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/projects" 
            className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            View All Projects
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

function SkillsShowcase() {
  const skills = [
    "JavaScript", "React", "Node.js", "TypeScript",
    "GraphQL", "MongoDB", "PostgreSQL", "AWS",
    "Docker", "Git", "CSS/SASS", "Tailwind CSS"
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4 text-center">My Tech Stack</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12 text-center max-w-2xl mx-auto">
          I work with a variety of technologies to create robust and scalable applications.
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          I'm currently available for freelance work and interesting projects.
          Let's build something amazing together!
        </p>
        <Link 
          to="/contact" 
          className="px-8 py-3 bg-white text-indigo-600 hover:bg-gray-100 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
        >
          Get In Touch
        </Link>
      </div>
    </section>
  );
}