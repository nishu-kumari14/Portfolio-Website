import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import profileImg from '../assets/images/profile.jpg';

const Home = () => {
  return (
    <div id='home' className='w-full min-h-screen bg-primary flex items-center justify-center py-16 px-4'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto w-full'>
        <div className='flex flex-col md:grid md:grid-cols-2 gap-8 items-center'>
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='text-center md:text-left order-2 md:order-1 mt-8 md:mt-0'
          >
            <p className='text-secondary text-base sm:text-lg'>Hi, my name is</p>
            <h1 className='text-2xl sm:text-4xl md:text-5xl font-bold text-textPrimary mt-2'>
              Nishu Kumari
            </h1>
            <h2 className='text-xl sm:text-3xl md:text-4xl font-bold text-textSecondary mt-2'>
              Aspiring Web Developer | Data Enthusiast
            </h2>
            <p className='text-textSecondary py-4 max-w-[700px] text-sm sm:text-base leading-relaxed'>
              I'm a Computer Science student at Lovely Professional University with a passion for web development
              and cybersecurity. Currently focused on building responsive full-stack web applications
              and exploring data science.
            </p>
            <div className='flex justify-center md:justify-start'>
              <Link to='projects' smooth={true} duration={500}>
                <button className='text-white group border-2 px-4 sm:px-6 py-2 sm:py-3 my-2 flex items-center hover:bg-secondary hover:border-secondary hover:text-primary transition-all duration-300 text-sm sm:text-base'>
                  View Projects
                  <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3' />
                  </span>
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='flex justify-center order-1 md:order-2'
          >
            <div className='relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72'>
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