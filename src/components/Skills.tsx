import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DiReact, DiPython, DiJavascript1, DiMongodb, DiGit } from 'react-icons/di';
import { SiCplusplus, SiMysql, SiTypescript, SiDjango, SiFlask, SiNodedotjs, SiPostgresql } from 'react-icons/si';

const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const skills = [
    { name: 'React',      icon: <DiReact size={46} />,      color: '#61DAFB', glow: 'rgba(97,218,251,0.25)'  },
    { name: 'Node.js',    icon: <SiNodedotjs size={36} />,  color: '#68A063', glow: 'rgba(104,160,99,0.25)'  },
    { name: 'Python',     icon: <DiPython size={46} />,     color: '#FFD43B', glow: 'rgba(255,212,59,0.25)'  },
    { name: 'JavaScript', icon: <DiJavascript1 size={46} />,color: '#F7DF1E', glow: 'rgba(247,223,30,0.25)'  },
    { name: 'TypeScript', icon: <SiTypescript size={34} />, color: '#3178C6', glow: 'rgba(49,120,198,0.25)'  },
    { name: 'Django',     icon: <SiDjango size={34} />,     color: '#44B78B', glow: 'rgba(68,183,139,0.25)'  },
    { name: 'Flask',      icon: <SiFlask size={34} />,      color: '#cccccc', glow: 'rgba(204,204,204,0.15)' },
    { name: 'MongoDB',    icon: <DiMongodb size={46} />,    color: '#4DB33D', glow: 'rgba(77,179,61,0.25)'   },
    { name: 'PostgreSQL', icon: <SiPostgresql size={34} />, color: '#336791', glow: 'rgba(51,103,145,0.25)'  },
    { name: 'MySQL',      icon: <SiMysql size={34} />,      color: '#4479A1', glow: 'rgba(68,121,161,0.25)'  },
    { name: 'C++',        icon: <SiCplusplus size={34} />,  color: '#00599C', glow: 'rgba(0,89,156,0.25)'    },
    { name: 'Git',        icon: <DiGit size={46} />,        color: '#F05032', glow: 'rgba(240,80,50,0.25)'   },
  ];

  const toolGroups = [
    {
      title: 'Dev Tools',
      color: '#64ffda',
      items: ['VS Code', 'Git & GitHub', 'Postman', 'Swagger / OpenAPI', 'npm / pip'],
    },
    {
      title: 'Databases & Cloud',
      color: '#3b82f6',
      items: ['MongoDB', 'PostgreSQL', 'MySQL', 'SQLite', 'Vercel / Netlify'],
    },
    {
      title: 'Testing & QA',
      color: '#a78bfa',
      items: ['Selenium WebDriver', 'PyTest', 'Jest / RTL', 'Postman Collections', 'Manual Test Cases'],
    },
    {
      title: 'Concepts',
      color: '#f59e0b',
      items: ['REST API Design', 'JWT / RBAC', 'Page Object Model', 'CRUD & ORM', 'MVC Architecture'],
    },
  ];

  return (
    <section id='skills' className='w-full min-h-screen py-24'>
      <div className='max-w-[1100px] mx-auto px-6'>

        {/* Heading */}
        <motion.div
          className='mb-16'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className='text-sm text-secondary mb-2' style={{ fontFamily: 'Fira Code, monospace' }}>02. skills</p>
          <h2 className='text-3xl sm:text-4xl font-black text-textPrimary'>Technologies</h2>
          <div className='w-12 h-0.5 bg-secondary mt-3' />
        </motion.div>

        {/* Icon grid */}
        <motion.div
          className='grid grid-cols-4 sm:grid-cols-6 md:grid-cols-6 gap-3 mb-14'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{ y: -5 }}
              className='flex flex-col items-center justify-center py-5 px-2 rounded-xl transition-all duration-300 cursor-default'
              style={{
                background: hoveredIndex === index
                  ? `rgba(17,34,64,0.9)`
                  : 'rgba(17,34,64,0.5)',
                border: `1px solid ${hoveredIndex === index ? `${skill.color}50` : 'rgba(100,255,218,0.08)'}`,
                boxShadow: hoveredIndex === index ? `0 0 20px ${skill.glow}` : 'none',
              }}
            >
              <div
                className='transition-all duration-300 mb-2'
                style={{ color: hoveredIndex === index ? skill.color : '#4a5568' }}
              >
                {skill.icon}
              </div>
              <p
                className='text-xs text-center transition-colors duration-300'
                style={{ color: hoveredIndex === index ? skill.color : '#8892b0' }}
              >
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Tool groups */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          {toolGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className='glass-card rounded-xl p-5 hover:border-secondary/25 transition-all duration-300'
              whileHover={{ scale: 1.02 }}
            >
              <div className='flex items-center gap-2 mb-4'>
                <div className='w-2 h-2 rounded-full' style={{ background: group.color }} />
                <h4 className='text-sm font-bold' style={{ color: group.color }}>{group.title}</h4>
              </div>
              <ul className='space-y-2'>
                {group.items.map((item, j) => (
                  <li key={j} className='flex items-center gap-2 text-xs text-textSecondary'>
                    <span className='w-1 h-1 rounded-full shrink-0' style={{ background: group.color, opacity: 0.5 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
