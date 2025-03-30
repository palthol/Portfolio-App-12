import { motion } from "framer-motion";

export function SkillsShowcase() {
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