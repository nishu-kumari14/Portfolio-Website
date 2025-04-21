import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type TabKey = 'about' | 'education' | 'interests';

interface TabContent {
  about: {
    title: string;
    content: string;
  };
  education: {
    title: string;
    content: {
      degree: string;
      school: string;
      duration: string;
      gpa: string;
    };
  };
  interests: {
    title: string;
    content: string[];
  };
}

const About = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('about');
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const tabs: TabContent = {
    about: {
      title: 'About Me',
      content: "I'm a passionate Computer Science student at Lovely Professional University, currently pursuing my B.Tech with a CGPA of 8.2. My interests span across web development, data science, and cybersecurity. I believe in continuous learning and problem-solving."
    },
    education: {
      title: 'Education',
      content: {
        degree: 'B.Tech in Computer Science',
        school: 'Lovely Professional University',
        duration: '2022 - 2026',
        gpa: '8.2 CGPA'
      }
    },
    interests: {
      title: 'Interests',
      content: [
        'Web Development',
        'Data Science',
        'Cybersecurity',
        'Problem Solving',
        'Machine Learning'
      ]
    }
  };

  const skills = [
    { name: 'Problem Solving', level: 90 },
    { name: 'Teamwork', level: 85 },
    { name: 'Critical Thinking', level: 88 },
    { name: 'Adaptability', level: 92 },
    { name: 'Communication', level: 85 },
    { name: 'Leadership', level: 80 }
  ];

  return (
    <div id='about' className='w-full min-h-screen bg-primary text-textPrimary'>
      <div className='max-w-[1200px] mx-auto p-4 py-16 flex flex-col justify-center'>
        <motion.div 
          className='mb-12'
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className='text-4xl sm:text-5xl font-bold inline border-b-4 border-secondary'>
            About
          </h2>
        </motion.div>

        <div className='grid md:grid-cols-2 gap-12'>
          {/* Left Column - Tabs */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className='flex space-x-4 mb-6'>
              {(Object.keys(tabs) as TabKey[]).map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                    ${activeTab === tab 
                      ? 'bg-secondary text-primary scale-105' 
                      : 'text-textSecondary hover:text-secondary hover:scale-105'
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tabs[tab].title}
                </motion.button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className='bg-tertiary rounded-xl p-6 shadow-xl'
              >
                {activeTab === 'about' && (
                  <motion.p 
                    className='text-textSecondary leading-relaxed'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {tabs.about.content}
                  </motion.p>
                )}

                {activeTab === 'education' && (
                  <motion.div 
                    className='space-y-4'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className='text-xl font-bold text-secondary'>
                      {tabs.education.content.degree}
                    </h3>
                    <p className='text-textSecondary'>
                      {tabs.education.content.school}
                    </p>
                    <p className='text-textSecondary'>
                      {tabs.education.content.duration}
                    </p>
                    <p className='text-secondary font-semibold'>
                      {tabs.education.content.gpa}
                    </p>
                  </motion.div>
                )}

                {activeTab === 'interests' && (
                  <motion.ul 
                    className='grid grid-cols-2 gap-3'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {tabs.interests.content.map((interest, index) => (
                      <motion.li
                        key={index}
                        className='flex items-center space-x-2 text-textSecondary'
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                      >
                        <span className='w-2 h-2 bg-secondary rounded-full'></span>
                        <span>{interest}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='space-y-6'
          >
            <h3 className='text-2xl font-bold text-secondary'>Key Skills</h3>
            <div className='grid grid-cols-2 gap-4'>
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className='bg-tertiary p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300'
                  onHoverStart={() => setIsHovered(index)}
                  onHoverEnd={() => setIsHovered(null)}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className='flex items-center space-x-3'>
                    <div className='w-3 h-3 bg-secondary rounded-full'></div>
                    <p className='text-textSecondary font-medium'>{skill.name}</p>
                  </div>
                  <div className='mt-2 bg-primary rounded-full h-2'>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ 
                        width: isHovered === index ? `${skill.level}%` : '0%',
                        transition: { duration: 1 }
                      }}
                      className='bg-secondary h-full rounded-full'
                    />
                  </div>
                  {isHovered === index && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className='text-xs text-secondary mt-1 block text-right'
                    >
                      {skill.level}%
                    </motion.span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About; 