import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaTrophy, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const work = {
    title: 'Data Annotator',
    company: 'Outlier AI',
    duration: 'Dec 2024 – Present',
    type: 'Remote',
    achievements: [
      'Composed high-quality prompts, enhancing AI model accuracy in math responses — 20% improvement in solution correctness.',
      'Designed and reviewed AI-generated math content, ensuring factual accuracy and pedagogical clarity — 30% reduction in model errors.',
      'Executed rigorous assessment frameworks to evaluate AI-generated solutions, improving response ranking reliability by 25%.',
    ],
  };

  const achievements = [
    {
      title: 'Silver + Elite Category',
      org: 'NPTEL — Ethical Hacking',
      detail: '72% score',
      date: 'Nov 2024',
      color: '#64ffda',
    },
    {
      title: 'Event Manager',
      org: 'Student Organization Wissen',
      detail: 'Led & organized technical events',
      date: 'Sep 2022 – Present',
      color: '#3b82f6',
    },
    {
      title: 'National Level Player',
      org: 'Volleyball Team',
      detail: 'Led team to national competitions',
      date: 'Aug 2018',
      color: '#f59e0b',
    },
  ];

  return (
    <section id='experience' className='w-full min-h-screen py-24'>
      <div className='max-w-[900px] mx-auto px-6'>

        {/* Heading */}
        <motion.div
          className='mb-16'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className='text-sm text-secondary mb-2' style={{ fontFamily: 'Fira Code, monospace' }}>04. experience</p>
          <h2 className='text-3xl sm:text-4xl font-black text-textPrimary'>Work & Achievements</h2>
          <div className='w-12 h-0.5 bg-secondary mt-3' />
        </motion.div>

        {/* Work Experience */}
        <motion.div
          className='mb-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className='flex items-center gap-3 mb-8'>
            <FaBriefcase className='text-secondary' size={18} />
            <h3 className='text-lg font-bold text-secondary'>Work Experience</h3>
          </div>

          {/* Timeline */}
          <div className='flex gap-6'>
            {/* Timeline rail */}
            <div className='flex flex-col items-center'>
              <motion.div
                className='w-3 h-3 rounded-full border-2 border-secondary shrink-0 mt-1'
                style={{ background: '#64ffda', boxShadow: '0 0 8px rgba(100,255,218,0.5)' }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              />
              <div className='timeline-line flex-1 mt-2' />
            </div>

            {/* Card */}
            <motion.div
              className='glass-card rounded-2xl p-6 flex-1 mb-4'
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4'>
                <div>
                  <h4 className='text-xl font-bold text-textPrimary'>{work.title}</h4>
                  <p className='text-secondary font-medium mt-0.5'>{work.company}</p>
                </div>
                <div className='text-right shrink-0'>
                  <p className='text-textSecondary text-sm' style={{ fontFamily: 'Fira Code, monospace' }}>{work.duration}</p>
                  <div className='flex items-center gap-1 justify-end mt-1'>
                    <FaMapMarkerAlt size={11} className='text-secondary' />
                    <span className='text-xs text-textSecondary'>{work.type}</span>
                  </div>
                </div>
              </div>
              <ul className='space-y-3'>
                {work.achievements.map((a, i) => (
                  <motion.li
                    key={i}
                    className='flex items-start gap-3 text-textSecondary text-sm leading-relaxed'
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <span className='w-1.5 h-1.5 bg-secondary rounded-full shrink-0 mt-2' />
                    {a}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Achievements timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className='flex items-center gap-3 mb-8'>
            <FaTrophy className='text-secondary' size={18} />
            <h3 className='text-lg font-bold text-secondary'>Achievements</h3>
          </div>

          <div className='flex gap-6'>
            {/* Rail */}
            <div className='flex flex-col items-center'>
              {achievements.map((_, i) => (
                <React.Fragment key={i}>
                  <motion.div
                    className='w-3 h-3 rounded-full border-2 shrink-0 mt-1'
                    style={{
                      borderColor: achievements[i].color,
                      background: achievements[i].color,
                      boxShadow: `0 0 8px ${achievements[i].color}66`,
                    }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.15 }}
                  />
                  {i < achievements.length - 1 && (
                    <div className='timeline-line flex-1 my-2' />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Achievement cards */}
            <div className='flex flex-col gap-4 flex-1'>
              {achievements.map((item, i) => (
                <motion.div
                  key={i}
                  className='glass-card rounded-xl p-5'
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.2 + i * 0.12 }}
                  whileHover={{ scale: 1.02, borderColor: `${item.color}40` }}
                  style={{ transition: 'border-color 0.3s' }}
                >
                  <div className='flex justify-between items-start flex-wrap gap-2'>
                    <div>
                      <h4 className='font-bold text-textPrimary'>{item.title}</h4>
                      <p className='text-sm mt-0.5' style={{ color: item.color }}>{item.org}</p>
                      <p className='text-xs text-textSecondary mt-1'>{item.detail}</p>
                    </div>
                    <span className='text-xs text-textSecondary shrink-0' style={{ fontFamily: 'Fira Code, monospace' }}>
                      {item.date}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
