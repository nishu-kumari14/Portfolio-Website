import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import profileImg from '../assets/images/profile.jpg';

const Home = () => {
  return (
    <div id='home' className='w-full h-screen'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <div className='grid md:grid-cols-2 gap-8 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className='text-secondary'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-textPrimary'>
              Nishu Kumari
            </h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-textSecondary'>
              Aspiring Web Developer | Data Enthusiast
            </h2>
            <p className='text-textSecondary py-4 max-w-[700px]'>
              I'm a Computer Science student at Lovely Professional University with a passion for web development
              and cybersecurity. Currently focused on building responsive full-stack web applications
              and exploring data science.
            </p>
            <div>
              <Link to='projects' smooth={true} duration={500}>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-secondary hover:border-secondary hover:text-primary'>
                  View Projects
                  <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3' />
                  </span>
                </button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='flex justify-center'
          >
            <div className='relative w-64 h-64 md:w-80 md:h-80'>
              <div className='absolute inset-0 bg-secondary rounded-full opacity-20 transform -translate-x-2 -translate-y-2'></div>
              <img
                src={profileImg}
                alt='Profile'
                className='rounded-full w-full h-full object-cover border-4 border-secondary shadow-lg z-10 relative'
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home; 