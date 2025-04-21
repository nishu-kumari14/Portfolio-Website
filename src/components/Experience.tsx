import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaTrophy } from 'react-icons/fa';

const Experience = () => {
  const workExperience = [
    {
      title: 'Data Annotator',
      company: 'Outlier AI',
      duration: 'Dec 2024 - Present',
      type: 'Remote Work',
      achievements: [
        'Composed high-quality prompts, enhancing AI model accuracy in generating and evaluating math responses, leading to a 20% improvement in solution correctness.',
        'Designed and reviewed AI-generated math content, ensuring factual accuracy and pedagogical clarity, resulting in a 30% reduction in model errors.',
        'Executed rigorous assessment frameworks to evaluate AI-generated solutions, improving response ranking reliability by 25%.'
      ]
    }
  ];

  const achievements = [
    {
      title: 'Silver + Elite Category',
      description: 'NPTEL Ethical Hacking Course',
      score: '78%',
      date: 'November 2024'
    },
    {
      title: 'Event Manager',
      description: 'Student Organization Wissen',
      details: 'Led and organized technical events',
      date: 'September 2022 - Present'
    },
    {
      title: 'National Level Player',
      description: 'Volleyball Team',
      details: 'Led team to national competitions',
      date: 'August 2018'
    }
  ];

  return (
    <div id='experience' className='w-full min-h-screen bg-primary text-textPrimary'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className='text-4xl font-bold inline border-b-4 border-secondary'>Experience</p>
          <p className='py-4 text-textSecondary'>My professional journey and achievements</p>
        </motion.div>

        {/* Work Experience */}
        <div className='mt-8'>
          <h3 className='text-2xl font-bold flex items-center gap-2 text-secondary'>
            <FaBriefcase /> Work Experience
          </h3>
          {workExperience.map((exp, index) => (
            <motion.div
              key={index}
              className='mt-6 bg-tertiary p-6 rounded-lg'
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className='flex justify-between items-start flex-wrap gap-2'>
                <div>
                  <h4 className='text-xl font-bold'>{exp.title}</h4>
                  <p className='text-secondary'>{exp.company}</p>
                </div>
                <div className='text-right'>
                  <p className='text-textSecondary'>{exp.duration}</p>
                  <p className='text-sm text-secondary'>{exp.type}</p>
                </div>
              </div>
              <ul className='mt-4 space-y-2'>
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className='text-textSecondary list-disc ml-4'>
                    {achievement}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <div className='mt-12'>
          <h3 className='text-2xl font-bold flex items-center gap-2 text-secondary'>
            <FaTrophy /> Achievements
          </h3>
          <div className='grid md:grid-cols-3 gap-4 mt-6'>
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className='bg-tertiary p-6 rounded-lg'
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
              >
                <h4 className='text-lg font-bold'>{achievement.title}</h4>
                <p className='text-secondary'>{achievement.description}</p>
                {achievement.score && (
                  <p className='text-textSecondary mt-2'>Score: {achievement.score}</p>
                )}
                {achievement.details && (
                  <p className='text-textSecondary mt-2'>{achievement.details}</p>
                )}
                <p className='text-sm text-textSecondary mt-2 italic'>{achievement.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience; 