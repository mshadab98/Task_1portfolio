import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Award, Calendar, MapPin } from 'lucide-react';

const EducationSection = () => {
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

  const educationData = [
    {
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'Mohammad Ali Jauhar University ',
      location: 'Rampur, India',
      period: '2021 - 2025',
      description: 'Studying in Computer Science Engineering with a focus on full-stack web development using the MERN stack and programming in Python.',
      achievements: [
        'CGPA: 8.2/10',
        'Class Representative for 2 consecutive years',
        
       
      ]
    },
    {
      degree: 'Higher Secondary Education (Class XII)',
      institution: 'Milton Educational Academy',
      location: 'Bilaspur Up',
      period: '2018 - 2019',
      description: 'Focused on PCM (Physics, Chemistry, Mathematics) .',
      achievements: [
        'Scored 70% in final examinations',
        'Participated in Cricket and volleyball.',
      ]
    }
  ];

  const certificationData = [
    {
      name: 'Frontend React Developer',
      issuer: 'Tsoft Tech',
      date: '06 feb 2025- 08 april 2025',
      description: ' TSoft Tech is a software development company specializing in building modern web and mobile applications for diverse industry needs.',
      link: 'https://drive.google.com/file/d/1HZtBvnKway9ZboxUQouimw6ixBnXUwwI/view?usp=drivesdk'
    },
    {
      name: 'Mega Career Guidance workshop Certificate',
      issuer: 'Sheryians  Coding school',
      date: '26 Jan 2025',
      description: 'Participated in a comprehensive workshop focused on career planning, industry insights, and emerging tech skills, organized by Sheryians Coding School.',
      link: 'https://drive.google.com/file/d/11GBcWm3ymQhDEG-0PTtmBbqg4qS7Hnh2/view?usp=drivesdk'
    },
    {
      name: 'Full Stack Web Development',
      issuer: 'Unified Mentor  ',
      date: 'Dec 2024 - March 2025',
      description: 'Comprehensive course on MERN stack development with real-world projects.',
      link: 'https://drive.google.com/file/d/16Us_2EezbQPj5gvaPBbwo156y3v0bHdR/view?usp=drivesdk'
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-slate-900">
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
              Education & <span className="text-violet-600 dark:text-violet-400">Certifications</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-teal-400 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Education */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-8">
                <div className="text-violet-600 dark:text-violet-400 mr-3">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  Education
                </h3>
              </div>

              <div className="relative pl-8 border-l-2 border-violet-500 dark:border-violet-400 space-y-12">
                {educationData.map((item, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-[25px] h-12 w-12 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center">
                      <div className="h-5 w-5 rounded-full bg-violet-600 dark:bg-violet-400"></div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-1">
                        {item.degree}
                      </h4>
                      <h5 className="text-lg font-medium text-violet-600 dark:text-violet-400 mb-2">
                        {item.institution}
                      </h5>
                      <div className="flex flex-wrap gap-x-4 gap-y-2 mb-3 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-1" />
                          {item.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-1" />
                          {item.location}
                        </div>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mb-3">
                        {item.description}
                      </p>
                      {item.achievements && (
                        <div className="mt-3">
                          <h6 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                            Achievements:
                          </h6>
                          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                            {item.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-8">
                <div className="text-teal-500 dark:text-teal-400 mr-3">
                  <Award size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  Certifications
                </h3>
              </div>

              <div className="space-y-6">
                {certificationData.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white dark:bg-slate-800 p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  >
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1">
                      {cert.name}
                    </h4>
                    <div className="flex justify-between mb-3">
                      <span className="text-teal-600 dark:text-teal-400 font-medium">
                        {cert.issuer}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">
                        {cert.date}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      {cert.description}
                    </p>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300"
                      >
                        View Certificate
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
