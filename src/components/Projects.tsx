import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  date: string;
  features: string[];
  gradient: [string, string];
}

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const projects: Project[] = [
    {
      title: 'AI Image Metadata & Caption Generator',
      description: 'MERN app using Google Vision API and OpenAI to auto-generate metadata tags and captions for uploaded images, stored in MongoDB GridFS.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Google Vision API'],
      github: 'https://github.com/nishu-kumari14/AI-Image-Metadata-and-Caption-Generator',
      date: 'Jan 2026',
      gradient: ['#0f2027', '#203a43'],
      features: ['AI-powered captioning', 'Metadata extraction', 'GridFS image storage', 'Editable captions', 'Ant Design UI'],
    },
    {
      title: 'Insurance Claim Management System',
      description: 'Web app for managing hospital insurance claims with workflow automation, bill tracking, advance payments, and real-time analytics.',
      tech: ['React.js', 'JavaScript', 'REST API', 'Vercel'],
      github: 'https://github.com/nishu-kumari14/Insurance-Claim-Management-System',
      live: 'https://insurance-claim-management-system-beta.vercel.app',
      date: 'Jan 2026',
      gradient: ['#0f3460', '#533483'],
      features: ['Full claim lifecycle', 'Bill & advance tracking', 'Auto balance calculation', 'Status workflow', 'Analytics dashboard'],
    },
    {
      title: 'Field Force Tracker',
      description: 'Real-time field management app with GPS check-ins, distance calculation from client sites, manager dashboard, and daily reports.',
      tech: ['React.js', 'Node.js', 'Express.js', 'SQLite', 'JWT', 'Tailwind CSS'],
      github: 'https://github.com/nishu-kumari14/Field-Force-Tracker',
      date: 'Jan 2026',
      gradient: ['#134e4a', '#0f2d40'],
      features: ['GPS check-in/out', 'Distance calculation', 'Manager dashboard', 'RBAC', 'Daily reports'],
    },
    {
      title: 'ThreadHub – Community Feed',
      description: 'Django + React platform with Reddit-style threaded discussions and a real-time karma leaderboard tracking top contributors over 24 hours.',
      tech: ['Django', 'Python', 'React.js', 'Tailwind CSS', 'Vercel'],
      github: 'https://github.com/nishu-kumari14/ThreadHub-Community_Feed',
      live: 'https://thread-hub-community-feed.vercel.app',
      date: 'Jan 2026',
      gradient: ['#1a2a1a', '#2d1b69'],
      features: ['Nested threads', 'Karma system', '24h leaderboard', 'CORS hardened', 'Mobile responsive'],
    },
    {
      title: 'Mini CRM Backend',
      description: 'Production-ready NestJS REST API with PostgreSQL for customer & task management, JWT auth, RBAC, and full Swagger documentation.',
      tech: ['NestJS', 'TypeScript', 'PostgreSQL', 'Prisma', 'JWT', 'Swagger'],
      github: 'https://github.com/nishu-kumari14/Mini-CRM-Backend',
      date: 'Jan 2026',
      gradient: ['#1a0533', '#0a2647'],
      features: ['JWT authentication', 'Admin & Employee RBAC', 'Paginated search', 'Task tracking', 'OpenAPI docs'],
    },
    {
      title: 'QA Automation – E-Commerce',
      description: 'End-to-end QA framework using Selenium POM, PyTest, Postman API tests, and SQL validation covering the full testing lifecycle.',
      tech: ['Python', 'Selenium', 'PyTest', 'Postman', 'SQL'],
      github: 'https://github.com/nishu-kumari14/qa-automation-ecommerce-selenium-api',
      date: 'Mar 2026',
      gradient: ['#1a2744', '#1a3d2f'],
      features: ['Selenium POM', 'PyTest suite', 'Postman collection', 'SQL validation', 'Manual test docs'],
    },
    {
      title: 'Employee Management System',
      description: 'Flask-based EMS with CRUD operations, REST API, SQLite persistence, input validation, and a Bootstrap-based responsive UI.',
      tech: ['Python', 'Flask', 'SQLite', 'REST API', 'Bootstrap'],
      github: 'https://github.com/nishu-kumari14/EMS-Employee-Management-System',
      date: 'Aug 2025',
      gradient: ['#1a2a00', '#002233'],
      features: ['Full CRUD', 'REST endpoints', 'Input validation', 'Role management', 'Bootstrap UI'],
    },
    {
      title: 'Helping Hands Pharmacy',
      description: 'Full-stack MERN pharmacy store with user auth, searchable medicine catalog, shopping cart, and secure payment integration.',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'React.js', 'Bootstrap'],
      github: 'https://github.com/nishu-kumari14/Helping-Hands-Pharmacy-Website',
      live: 'https://nishu-kumari14.github.io/Helping-Hands-Pharmacy-Website/home.html',
      date: 'Jul 2024',
      gradient: ['#1a3a5c', '#0a2340'],
      features: ['Auth & authorization', 'Catalog with filters', 'Shopping cart', 'Payment integration', 'Fully responsive'],
    },
  ];

  const filterTechs = ['React.js', 'Node.js', 'Python', 'TypeScript', 'Django', 'Flask', 'MongoDB', 'JWT', 'Tailwind CSS'];

  const filtered = selectedTech ? projects.filter(p => p.tech.includes(selectedTech)) : projects;

  return (
    <section id='projects' className='w-full min-h-screen py-24'>
      <div className='max-w-[1200px] mx-auto px-6'>

        {/* Heading */}
        <motion.div
          className='mb-12'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className='text-sm text-secondary mb-2' style={{ fontFamily: 'Fira Code, monospace' }}>03. projects</p>
          <h2 className='text-3xl sm:text-4xl font-black text-textPrimary'>What I've Built</h2>
          <div className='w-12 h-0.5 bg-secondary mt-3 mb-6' />

          {/* Filter chips */}
          <div className='flex flex-wrap gap-2'>
            <motion.button
              onClick={() => setSelectedTech(null)}
              className='px-3 py-1 rounded-full text-xs transition-all duration-300'
              style={{
                background: !selectedTech ? 'rgba(100,255,218,0.15)' : 'transparent',
                border: `1px solid ${!selectedTech ? '#64ffda' : 'rgba(100,255,218,0.25)'}`,
                color: !selectedTech ? '#64ffda' : '#8892b0',
                fontFamily: 'Fira Code, monospace',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              all ({projects.length})
            </motion.button>
            {filterTechs.map(tech => (
              <motion.button
                key={tech}
                onClick={() => setSelectedTech(tech === selectedTech ? null : tech)}
                className='px-3 py-1 rounded-full text-xs transition-all duration-300'
                style={{
                  background: tech === selectedTech ? 'rgba(100,255,218,0.15)' : 'transparent',
                  border: `1px solid ${tech === selectedTech ? '#64ffda' : 'rgba(100,255,218,0.25)'}`,
                  color: tech === selectedTech ? '#64ffda' : '#8892b0',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tech}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Project grid */}
        <AnimatePresence mode='wait'>
          <motion.div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3' layout>
            {filtered.map((project, index) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className='flex flex-col rounded-xl overflow-hidden cursor-default group'
                style={{
                  background: 'rgba(17,34,64,0.55)',
                  border: '1px solid rgba(100,255,218,0.08)',
                  backdropFilter: 'blur(8px)',
                }}
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
                whileHover={{
                  y: -6,
                  borderColor: 'rgba(100,255,218,0.25)',
                  transition: { duration: 0.2 },
                }}
              >
                {/* Gradient header */}
                <div
                  className='h-[100px] relative p-5 flex items-end overflow-hidden'
                  style={{ background: `linear-gradient(135deg, ${project.gradient[0]}, ${project.gradient[1]})` }}
                >
                  <div
                    className='absolute inset-0'
                    style={{ background: 'radial-gradient(circle at 15% 70%, rgba(100,255,218,0.07), transparent 55%)' }}
                  />
                  <div className='relative z-10'>
                    <p className='text-[10px] text-secondary/60 mb-0.5' style={{ fontFamily: 'Fira Code, monospace' }}>{project.date}</p>
                    <h3 className='text-base font-bold text-textPrimary group-hover:text-secondary transition-colors duration-300 leading-snug'>
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Body */}
                <div className='flex flex-col flex-1 p-5'>
                  <p className='text-textSecondary text-sm leading-relaxed mb-4'>{project.description}</p>

                  {/* Feature list on hover */}
                  <AnimatePresence>
                    {hoveredProject === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className='mb-4 overflow-hidden'
                      >
                        <p className='text-[10px] text-secondary uppercase tracking-widest mb-2' style={{ fontFamily: 'Fira Code, monospace' }}>
                          key features
                        </p>
                        <ul className='space-y-1'>
                          {project.features.map((f, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.04 }}
                              className='flex items-start gap-2 text-xs text-textSecondary'
                            >
                              <span className='w-1.5 h-1.5 bg-secondary rounded-full mt-1.5 shrink-0' />
                              {f}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Tech badges */}
                  <div className='flex flex-wrap gap-1.5 mt-auto mb-4'>
                    {project.tech.map((t, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedTech(t === selectedTech ? null : t)}
                        className='px-2 py-0.5 text-[10px] rounded-full transition-all duration-200'
                        style={{
                          background: 'rgba(10,25,47,0.7)',
                          border: `1px solid ${t === selectedTech ? '#64ffda' : 'rgba(100,255,218,0.2)'}`,
                          color: t === selectedTech ? '#64ffda' : '#8892b0',
                          fontFamily: 'Fira Code, monospace',
                        }}
                      >
                        {t}
                      </button>
                    ))}
                  </div>

                  {/* Links */}
                  <div className='flex gap-4 pt-3' style={{ borderTop: '1px solid rgba(100,255,218,0.08)' }}>
                    <motion.a
                      href={project.github}
                      target='_blank'
                      rel='noreferrer'
                      className='flex items-center gap-1.5 text-xs text-textSecondary hover:text-secondary transition-colors duration-300'
                      whileHover={{ scale: 1.06 }}
                    >
                      <FaGithub size={14} /> Code
                    </motion.a>
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target='_blank'
                        rel='noreferrer'
                        className='flex items-center gap-1.5 text-xs text-textSecondary hover:text-secondary transition-colors duration-300'
                        whileHover={{ scale: 1.06 }}
                      >
                        <FaExternalLinkAlt size={11} /> Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div
          className='mt-14 text-center'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href='https://github.com/nishu-kumari14'
            target='_blank'
            rel='noreferrer'
            className='inline-flex items-center gap-2.5 text-sm text-textSecondary hover:text-secondary transition-all duration-300 px-6 py-3 rounded-full'
            style={{ border: '1px solid rgba(100,255,218,0.2)' }}
          >
            <FaGithub size={17} />
            View all on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
