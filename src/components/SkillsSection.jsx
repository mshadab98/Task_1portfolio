import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Code2,
  Database,
  Server,
  Cloud,
  Smartphone,
  Bot,
  Palette,
  GitBranch,
  Layout
} from 'lucide-react';

const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const skills = [
    {
      category: "Frontend Development",
      icon: <Layout size={32} />,
      items: ["React", "Vue.js",  "HTML", "CSS", "Javascript", "Tailwind CSS"]
    },
    {
      category: "Backend Development",
      icon: <Server size={32} />,
      items: ["Node.js", "Express",   "JSON", "RESTful APIs"]
    },
    {
      category: "Database",
      icon: <Database size={32} />,
      items: ["MongoDB",   "Postman"]
    },
    
    {
      category: "Mobile Development",
      icon: <Smartphone size={32} />,
      items: ["React Native", ]
    },
    {
      category: "Programming Languages",
      icon: <Code2 size={32} />,
      items: ["JavaScript", "Python", ]
    },
    
    
    {
      category: "Version Control",
      icon: <GitBranch size={32} />,
      items: ["Git", "GitHub", "GitLab", ]
    }
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-slate-900 dark:to-primary-900/20"
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technical <span className="text-primary-600 dark:text-primary-400">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and the technologies I work with.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border border-primary-100 dark:border-primary-800/30"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold ml-4 text-gray-800 dark:text-gray-100">
                    {skill.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-slate-700 dark:to-primary-900/50 rounded-full text-sm font-medium text-primary-700 dark:text-primary-300 shadow-sm border border-primary-100 dark:border-primary-700/30"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
