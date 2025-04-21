import React from 'react';
import { motion } from 'framer-motion';
import { DiReact, DiPython, DiJavascript1, DiMongodb, DiGit } from 'react-icons/di';
import { SiCplusplus, SiMysql, SiTypescript } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'React', icon: <DiReact size={50} /> },
    { name: 'Python', icon: <DiPython size={50} /> },
    { name: 'JavaScript', icon: <DiJavascript1 size={50} /> },
    { name: 'C++', icon: <SiCplusplus size={50} /> },
    { name: 'TypeScript', icon: <SiTypescript size={50} /> },
    { name: 'MongoDB', icon: <DiMongodb size={50} /> },
    { name: 'MySQL', icon: <SiMysql size={50} /> },
    { name: 'Git', icon: <DiGit size={50} /> },
  ];

  return (
    <div id='skills' className='w-full min-h-screen bg-primary text-textPrimary'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className='text-3xl sm:text-4xl font-bold inline border-b-4 border-secondary'>Skills</p>
          <p className='py-4 text-textSecondary text-sm sm:text-base'>These are the technologies I've worked with</p>
        </motion.div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 text-center py-6 sm:py-8'>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className='flex flex-col items-center justify-center p-3 sm:p-4'>
                <div className='text-2xl sm:text-3xl mb-2 sm:mb-4'>{skill.icon}</div>
                <p className='text-sm sm:text-base'>{skill.name}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className='mt-6 sm:mt-8'>
          <h3 className='text-xl sm:text-2xl font-bold mb-3 sm:mb-4'>Additional Skills</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4'>
            <motion.div
              className='bg-tertiary p-3 sm:p-4 rounded-lg'
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h4 className='text-lg sm:text-xl font-bold mb-2 text-secondary'>Development Tools</h4>
              <ul className='list-disc list-inside text-textSecondary text-sm sm:text-base'>
                <li>VS Code</li>
                <li>Git & GitHub</li>
                <li>npm/yarn</li>
              </ul>
            </motion.div>

            <motion.div
              className='bg-tertiary p-3 sm:p-4 rounded-lg'
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <h4 className='text-lg sm:text-xl font-bold mb-2 text-secondary'>Databases</h4>
              <ul className='list-disc list-inside text-textSecondary text-sm sm:text-base'>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>Database Design</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills; 