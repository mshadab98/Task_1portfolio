import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Code,
  BookOpen,
  Coffee,
  Music,
  Monitor,
  Camera
} from 'lucide-react';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const hobbies = [
    { icon: <Code size={24} />, label: 'Coding' },
    { icon: <BookOpen size={24} />, label: 'Reading' },
    { icon: <Coffee size={24} />, label: 'Coffee' },
    { icon: <Music size={24} />, label: 'Music' },
    { icon: <Monitor size={24} />, label: 'Gaming' },
    { icon: <Camera size={24} />, label: 'Photography' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-slate-800/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About <span className="text-violet-600 dark:text-violet-400">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-teal-400 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              variants={itemVariants}
              className="col-span-2"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                Who am I?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              I am a final-year B.Tech Computer Science Engineering student specializing in MERN stack development and Python programming. With a strong foundation in full-stack web development, I have built several projects that showcase my ability to design and implement scalable, efficient, and user-friendly applications.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            I specialize in web development and have experience with various frameworks and libraries. I enjoy solving complex problems and continuously learning new technologies.


              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm currently seeking opportunities where I can apply my skills, learn from experienced professionals,
                and contribute to meaningful projects that make a difference.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col justify-between"
            >
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                  Personal Info
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li><span className="font-medium">Name:</span> Mohd Shadab</li>
                  <li><span className="font-medium">Age:</span> 23 Years</li>
                  <li><span className="font-medium">University:</span> Mohammad Ali Jauhar University</li>
                  <li><span className="font-medium">Degree:</span> B.Tech in CSE</li>
                  <li><span className="font-medium">Email:</span> mohdshadab98977@gmail.com</li>
                  <li><span className="font-medium">Location:</span> New Delhi, India</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                  Hobbies & Interests
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {hobbies.map((hobby, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center p-2 rounded-lg bg-white dark:bg-slate-700 shadow-sm"
                    >
                      <div className="text-violet-600 dark:text-violet-400 mb-1">
                        {hobby.icon}
                      </div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {hobby.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
