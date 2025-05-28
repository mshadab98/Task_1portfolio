import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, X } from 'lucide-react';

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title:"InstaMart-Mern-Project",
      description: 'A full-stack smart delivery system built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It features an admin panel for managing products, users, and orders, with real-time data handling and a responsive UI.',
      image: "/InstaMart.png",
      tags: ['React', 'Node.js', 'Express.js', 'MongoDB',  'Tailwind CSS'],
      category: 'web',
      liveLink: 'https://insta-mart-mern-project-9lr5.vercel.app/',
      githubLink: 'https://github.com/mshadab98/InstaMart-Mern-Project.git',
      details: 'InstaMart is a smart delivery system built using the MERN stack. It includes an admin panel for managing products, orders, and users. The application supports real-time updates, secure authentication, and a responsive interface designed with Tailwind CSS. The backend uses Express.js and MongoDB for efficient data handling and scalability.'
    },
    {
      id: 2,
      title: 'URL Shortener',
      description: 'A simple and efficient tool to shorten long URLs for easy sharing and redirection.',
      image: '/Url.png',
      tags: ['React', 'Redux', 'Node.js', 'MongoDB', 'Express.js'],
      category: 'web',
      liveLink: 'https://shortener-u-rl-4ceu.vercel.app/',
      githubLink: 'https://github.com/mshadab98/shortener-URl.git',
      details: 'This URL Shortener allows users to convert long URLs into concise, easy-to-share links. The frontend (optional) can be built using React for user input and display, while the backend is powered by Node.js, Express.js, and MongoDB to store and redirect shortened URLs. Each shortened URL generates a unique identifier that redirects to the original link, simplifying link sharing and tracking.'
    },
    {
      id: 3,
      title: 'Course Hub',
      description: 'Explore various courses and enhance your skills.',
      image: '/CourseHub.png',
      tags: ['React',  "Tailwind CSS"], 
      category: 'web',
      liveLink: 'https://course-hub-iota.vercel.app/',
      githubLink: 'https://github.com/mshadab98/CourseHub.git',
      details:  'Course Hub is a simple React and Tailwind CSS-based web application where users can explore a list of available courses, select them, and mark them as completed. It features a clean and minimal interface designed for ease of use and effective learning tracking. Ideal for learners who want a straightforward course progress tracker.'

    },
    
    
    {
      id: 4,
      title: 'Zomato Page',
      description:  'A visually appealing food delivery homepage inspired by Zomato, built using React and Tailwind CSS.',
      image: '/zomato.png',
      tags: [   'React', "Tailwind CSS"  ],
      category: 'web',
      liveLink: 'https://task-6-zomato-page.vercel.app/',
      githubLink: 'https://github.com/mshadab98/Task-6-Zomato-page.git',
      details:  'This is a Zomato-inspired web page built with React and Tailwind CSS. It showcases a modern food delivery UI where users can browse popular restaurants, featured food items, and categories. The design focuses on responsiveness and visual appeal, mimicking the core layout and style of food delivery platforms. Ideal for front-end practice and UI prototyping.',

    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ml', name: 'Machine Learning' },
    { id: 'iot', name: 'IoT' },
    { id: 'blockchain', name: 'Blockchain' },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-800/30">
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
              My <span className="text-violet-600 dark:text-violet-400">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-teal-400 mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A collection of my recent work showcasing my skills and experience in various technologies.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-violet-600 text-white shadow-md'
                    : 'bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-violet-100 dark:hover:bg-violet-900/30'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white dark:bg-slate-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full p-5 rounded-3xl h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" title="Live Demo" className="text-white hover:text-violet-400">
                      <ExternalLink size={24} />
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" title="GitHub Repo" className="text-white hover:text-violet-400">
                      <Github size={24} />
                    </a>
                    <button
                      onClick={() => setSelectedProject(project)}
                      aria-label="View Details"
                      className="text-white hover:text-violet-400"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-violet-100 dark:bg-violet-700 text-violet-700 dark:text-violet-200 rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <AnimatePresence>
            {selectedProject && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
                onClick={() => setSelectedProject(null)}
              >
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                  className="bg-white dark:bg-slate-800 rounded-xl max-w-3xl w-full p-6 relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    aria-label="Close modal"
                  >
                    <X size={24} />
                  </button>
                  <h3 className="text-2xl font-bold mb-4 dark:text-white">{selectedProject.title}</h3>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="rounded-lg mb-4  object-cover w-full max-h-64"
                  />
                  <p className="mb-4 text-gray-700 dark:text-gray-300">{selectedProject.details}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-violet-100 dark:bg-violet-700 text-violet-700 dark:text-violet-200 rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-violet-600 text-white rounded hover:bg-violet-700 transition"
                    >
                      Live Demo
                    </a>
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-800 dark:bg-gray-900 text-white rounded hover:bg-gray-900 dark:hover:bg-gray-700 transition"
                    >
                      GitHub Repo
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
