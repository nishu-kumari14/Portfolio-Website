import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import helpingHandsImg from '../assets/images/helping-hands.jpg';
import dbmsImg from '../assets/images/dbms-project.jpg';
import libraryImg from '../assets/images/library-project.jpg';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  date: string;
  image: string;
  features: string[];
}

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [isImageLoaded, setIsImageLoaded] = useState<{ [key: string]: boolean }>({});

  const handleImageLoad = (projectTitle: string) => {
    setIsImageLoaded(prev => ({ ...prev, [projectTitle]: true }));
  };

  const projects: Project[] = [
    {
      title: 'Helping Hands Pharmacy Website',
      description: 'A comprehensive medical store website with user authentication and cart functionality. Features include medicine browsing, online purchasing, secure payment integration, and responsive design for optimal user experience.',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'React.js', 'Bootstrap'],
      github: 'https://github.com/nishu-kumari14/Helping-Hands-Pharmacy-Website',
      live: 'https://nishu-kumari14.github.io/Helping-Hands-Pharmacy-Website/home.html',
      date: 'July 2024',
      image: helpingHandsImg,
      features: [
        'User authentication and authorization',
        'Shopping cart functionality',
        'Medicine catalog with search and filters',
        'Secure payment integration',
        'Responsive design for all devices'
      ]
    },
    {
      title: 'Database Management System',
      description: 'Built a robust database system for managing admin and user data, implementing advanced clustering and operators for optimized storage and efficient search operations.',
      tech: ['MongoDB', 'DBMS', 'Express.js', 'SQL'],
      github: '#',
      live: '#',
      date: 'March 2024',
      image: dbmsImg,
      features: [
        'Advanced data clustering',
        'Optimized search operations',
        'User data management',
        'Admin dashboard',
        'Data analytics'
      ]
    },
    {
      title: 'Library Management System',
      description: 'Developed a comprehensive library management system using data structures for efficient book tracking and management.',
      tech: ['C++', 'Data Structures', 'File Handling'],
      github: '#',
      live: '#',
      date: 'Feb 2024',
      image: libraryImg,
      features: [
        'Book tracking system',
        'Member management',
        'Borrowing system',
        'Fine calculation',
        'Search functionality'
      ]
    }
  ];

  const filteredProjects = selectedTech
    ? projects.filter(project => project.tech.includes(selectedTech))
    : projects;

  return (
    <div id='projects' className='w-full min-h-screen text-textPrimary bg-primary'>
      <div className='max-w-[1200px] mx-auto p-4 py-16 flex flex-col justify-center'>
        <motion.div 
          className='mb-12'
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className='text-4xl sm:text-5xl font-bold inline border-b-4 text-textPrimary border-secondary'>
            Projects
          </h2>
          <p className='py-6 text-lg text-textSecondary'>Check out some of my recent work</p>
          
          {/* Technology Filter */}
          <div className='flex flex-wrap gap-2 mt-4'>
            <motion.button
              onClick={() => setSelectedTech(null)}
              className={`px-3 py-1 rounded-full text-sm transition-all duration-300 
                ${!selectedTech ? 'bg-secondary text-primary' : 'text-textSecondary border border-secondary'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              All
            </motion.button>
            {Array.from(new Set(projects.flatMap(p => p.tech))).map((tech) => (
              <motion.button
                key={tech}
                onClick={() => setSelectedTech(tech === selectedTech ? null : tech)}
                className={`px-3 py-1 rounded-full text-sm transition-all duration-300
                  ${tech === selectedTech ? 'bg-secondary text-primary' : 'text-textSecondary border border-secondary'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tech}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            className='grid gap-8'
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className='bg-tertiary rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-300'
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <div className='grid md:grid-cols-2 gap-6'>
                  {/* Project Image */}
                  <motion.div 
                    className='relative group h-[300px] md:h-full overflow-hidden'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className='absolute inset-0 bg-secondary/20 z-10'
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isImageLoaded[project.title] ? 0 : 1 }}
                    >
                      <div className='h-full flex items-center justify-center'>
                        <div className='w-8 h-8 border-4 border-secondary border-t-transparent rounded-full animate-spin'></div>
                      </div>
                    </motion.div>
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className='w-full h-full object-cover'
                      onLoad={() => handleImageLoad(project.title)}
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ 
                        scale: 1, 
                        opacity: isImageLoaded[project.title] ? 1 : 0 
                      }}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.div 
                      className='absolute inset-0 bg-gradient-to-t from-tertiary via-transparent to-transparent'
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  {/* Project Info */}
                  <div className='p-6 flex flex-col h-full'>
                    <div>
                      <motion.div 
                        className='flex justify-between items-start mb-4'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <h3 className='text-2xl md:text-3xl font-bold text-secondary'>
                          {project.title}
                        </h3>
                        <p className='text-sm text-textSecondary'>{project.date}</p>
                      </motion.div>
                      
                      <motion.p 
                        className='text-textSecondary mb-6 text-base md:text-lg'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        {project.description}
                      </motion.p>

                      <div className='space-y-6'>
                        {/* Features */}
                        <AnimatePresence>
                          {hoveredProject === index && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <h4 className='text-lg font-semibold text-secondary mb-2'>
                                Key Features:
                              </h4>
                              <ul className='grid grid-cols-1 sm:grid-cols-2 gap-2 text-textSecondary'>
                                {project.features.map((feature, i) => (
                                  <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className='flex items-center space-x-2'
                                  >
                                    <span className='w-2 h-2 bg-secondary rounded-full'></span>
                                    <span>{feature}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Technologies */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          <h4 className='text-lg font-semibold text-secondary mb-3'>
                            Technologies:
                          </h4>
                          <div className='flex flex-wrap gap-2'>
                            {project.tech.map((tech, techIndex) => (
                              <motion.span
                                key={techIndex}
                                className='px-3 py-1 text-sm bg-primary rounded-full text-textPrimary border border-secondary hover:bg-secondary hover:text-primary transition-all duration-300'
                                whileHover={{ scale: 1.1 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 + techIndex * 0.1 }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Links */}
                    <motion.div 
                      className='flex gap-4 mt-6 pt-4 border-t border-gray-700'
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <motion.a
                        href={project.github}
                        target='_blank'
                        rel='noreferrer'
                        className='flex items-center gap-2 text-textPrimary hover:text-secondary transition-all duration-300 px-4 py-2 border border-secondary rounded-full hover:bg-secondary/10'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub size={20} />
                        <span>View Code</span>
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target='_blank'
                        rel='noreferrer'
                        className='flex items-center gap-2 text-textPrimary hover:text-secondary transition-all duration-300 px-4 py-2 border border-secondary rounded-full hover:bg-secondary/10'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaExternalLinkAlt size={18} />
                        <span>Live Demo</span>
                      </motion.a>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects; 