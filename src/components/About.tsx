import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaCode, FaHeart } from 'react-icons/fa';

type TabKey = 'about' | 'education' | 'interests';

const About = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('about');

  const tabs: { key: TabKey; label: string; icon: React.ReactNode }[] = [
    { key: 'about', label: 'About Me', icon: <FaCode size={14} /> },
    { key: 'education', label: 'Education', icon: <FaGraduationCap size={14} /> },
    { key: 'interests', label: 'Interests', icon: <FaHeart size={14} /> },
  ];

  const softSkills = [
    { name: 'Problem Solving', level: 90 },
    { name: 'Teamwork', level: 85 },
    { name: 'Critical Thinking', level: 88 },
    { name: 'Adaptability', level: 92 },
    { name: 'Communication', level: 85 },
    { name: 'Leadership', level: 80 },
  ];

  const interests = [
    'Web Development', 'Data Science', 'Cybersecurity',
    'Machine Learning', 'Problem Solving', 'Open Source',
  ];

  return (
    <section id='about' className='w-full min-h-screen py-24'>
      <div className='max-w-[1200px] mx-auto px-6'>

        {/* Heading */}
        <motion.div
          className='mb-16'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className='text-sm text-secondary mb-2' style={{ fontFamily: 'Fira Code, monospace' }}>01. about</p>
          <h2 className='text-3xl sm:text-4xl font-black text-textPrimary'>About Me</h2>
          <div className='w-12 h-0.5 bg-secondary mt-3' />
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12 items-start'>

          {/* Left — tabbed info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {/* Tab buttons */}
            <div className='flex gap-2 mb-6'>
              {tabs.map((tab) => (
                <motion.button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className='flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300'
                  style={{
                    background: activeTab === tab.key ? 'rgba(100,255,218,0.1)' : 'rgba(17,34,64,0.5)',
                    border: `1px solid ${activeTab === tab.key ? '#64ffda' : 'rgba(100,255,218,0.15)'}`,
                    color: activeTab === tab.key ? '#64ffda' : '#8892b0',
                  }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {tab.icon}
                  {tab.label}
                </motion.button>
              ))}
            </div>

            {/* Tab content */}
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className='glass-card rounded-2xl p-6 min-h-[200px]'
              >
                {activeTab === 'about' && (
                  <p className='text-textSecondary leading-relaxed text-sm sm:text-base'>
                    I'm a passionate Computer Science student at Lovely Professional University, currently
                    pursuing my B.Tech with a CGPA of{' '}
                    <span className='text-secondary font-semibold'>8.34</span>. My interests span across
                    web development, data science, and cybersecurity. I believe in continuous learning,
                    clean code, and building products that solve real problems.
                  </p>
                )}

                {activeTab === 'education' && (
                  <div className='space-y-1'>
                    <div className='flex items-center gap-3 mb-4'>
                      <FaGraduationCap className='text-secondary' size={22} />
                      <h3 className='text-lg font-bold text-secondary'>B.Tech — Computer Science</h3>
                    </div>
                    <p className='text-textPrimary font-medium'>Lovely Professional University</p>
                    <p className='text-textSecondary text-sm'>2022 – 2026</p>
                    <div className='mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold'
                      style={{ background: 'rgba(100,255,218,0.1)', border: '1px solid rgba(100,255,218,0.3)', color: '#64ffda' }}>
                      CGPA: 8.34
                    </div>
                  </div>
                )}

                {activeTab === 'interests' && (
                  <div className='grid grid-cols-2 gap-3'>
                    {interests.map((interest, i) => (
                      <motion.div
                        key={i}
                        className='flex items-center gap-2 text-sm text-textSecondary'
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.07 }}
                      >
                        <span className='w-1.5 h-1.5 bg-secondary rounded-full shrink-0' />
                        {interest}
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right — soft skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='space-y-5'
          >
            <h3 className='text-lg font-bold text-secondary'>Soft Skills</h3>
            {softSkills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 + i * 0.08 }}
              >
                <div className='flex justify-between mb-1.5'>
                  <span className='text-sm text-textSecondary'>{skill.name}</span>
                  <span className='text-xs text-secondary' style={{ fontFamily: 'Fira Code, monospace' }}>
                    {skill.level}%
                  </span>
                </div>
                <div className='h-1.5 bg-primary/80 rounded-full overflow-hidden'
                  style={{ border: '1px solid rgba(100,255,218,0.1)' }}>
                  <motion.div
                    className='h-full rounded-full'
                    style={{ background: 'linear-gradient(90deg, #64ffda, #3b82f6)' }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 + i * 0.08, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
