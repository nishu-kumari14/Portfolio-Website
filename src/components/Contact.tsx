import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div id='contact' className='w-full min-h-screen bg-primary text-textPrimary'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className='text-4xl font-bold inline border-b-4 border-secondary'>Contact</p>
          <p className='py-4 text-textSecondary'>Get in touch with me</p>
        </motion.div>

        <div className='grid md:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8'>
          {/* Contact Info */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='flex flex-col space-y-3 sm:space-y-4'
          >
            <h3 className='text-xl sm:text-2xl font-bold'>Let's Connect</h3>
            <p className='text-textSecondary text-sm sm:text-base'>
              I'm currently looking for new opportunities. Whether you have a question
              or just want to say hi, feel free to reach out!
            </p>
            
            <div className='flex flex-col space-y-3 sm:space-y-4 mt-2 sm:mt-4'>
              <a
                href='mailto:nishusinghrajput1488@gmail.com'
                className='flex items-center space-x-3 text-textSecondary hover:text-secondary transition-colors text-sm sm:text-base'
              >
                <HiMail size={20} className='sm:w-6 sm:h-6' />
                <span>nishusinghrajput1488@gmail.com</span>
              </a>
              
              <a
                href='https://www.linkedin.com/in/nishu-kumari-lpu/'
                target='_blank'
                rel='noreferrer'
                className='flex items-center space-x-3 text-textSecondary hover:text-secondary transition-colors text-sm sm:text-base'
              >
                <FaLinkedin size={20} className='sm:w-6 sm:h-6' />
                <span>LinkedIn</span>
              </a>
              
              <a
                href='https://github.com/nishu-kumari14'
                target='_blank'
                rel='noreferrer'
                className='flex items-center space-x-3 text-textSecondary hover:text-secondary transition-colors text-sm sm:text-base'
              >
                <FaGithub size={20} className='sm:w-6 sm:h-6' />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className='flex flex-col space-y-3 sm:space-y-4'>
              <div>
                <label className='text-textSecondary text-sm sm:text-base'>Name</label>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  className='w-full p-2 sm:p-3 bg-tertiary border border-textSecondary rounded-lg focus:outline-none focus:border-secondary text-sm sm:text-base'
                  required
                />
              </div>
              
              <div>
                <label className='text-textSecondary text-sm sm:text-base'>Email</label>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full p-2 sm:p-3 bg-tertiary border border-textSecondary rounded-lg focus:outline-none focus:border-secondary text-sm sm:text-base'
                  required
                />
              </div>
              
              <div>
                <label className='text-textSecondary text-sm sm:text-base'>Message</label>
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className='w-full p-2 sm:p-3 bg-tertiary border border-textSecondary rounded-lg focus:outline-none focus:border-secondary text-sm sm:text-base'
                  required
                />
              </div>
              
              <button
                type='submit'
                className='text-white border-2 hover:bg-secondary hover:border-secondary hover:text-primary px-4 py-2 sm:px-6 sm:py-3 my-4 sm:my-8 mx-auto flex items-center text-sm sm:text-base'
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 