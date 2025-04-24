import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => setNav(!nav);

  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/assets/Nishu_Kumari_Resume.pdf';
    link.download = 'Nishu_Kumari_Resume_Updated.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Show tooltip
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  };

  const socialLinks = [
    {
      name: 'Linkedin',
      href: 'https://www.linkedin.com/in/nishu-kumari-lpu/',
      icon: <FaLinkedin size={30} />,
      bgColor: 'bg-blue-600'
    },
    {
      name: 'Github',
      href: 'https://github.com/nishu-kumari14',
      icon: <FaGithub size={30} />,
      bgColor: 'bg-[#333333]'
    },
    {
      name: 'Email',
      href: 'mailto:nishusinghrajput1488@gmail.com',
      icon: <HiOutlineMail size={30} />,
      bgColor: 'bg-[#6fc2b0]'
    },
    {
      name: 'Resume',
      onClick: handleDownload,
      icon: <FaDownload size={25} />,
      bgColor: 'bg-[#565f69]'
    }
  ];

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-primary text-textPrimary z-10'>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className='text-2xl font-bold text-secondary'>NK</h1>
      </motion.div>

      {/* menu */}
      <ul className='hidden md:flex gap-x-8'>
        {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
          <motion.li
            key={item}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to={item}
              smooth={true}
              duration={500}
              className='hover:text-secondary transition-colors duration-300 cursor-pointer'
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </motion.li>
        ))}
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {!nav ? <FaBars /> : <FaTimes />}
        </motion.div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {nav && (
          <motion.ul
            className='fixed top-0 left-0 w-full h-screen bg-primary flex flex-col justify-center items-center z-50'
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
          >
            {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
              <motion.li
                key={item}
                className='py-4 text-2xl sm:text-4xl'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  onClick={handleClick}
                  to={item}
                  smooth={true}
                  duration={500}
                  className='hover:text-secondary transition-colors duration-300'
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Social icons */}
      <div className='hidden lg:block fixed left-0 top-[35%] z-20'>
        <ul>
          {socialLinks.map((item, index) => (
            <motion.li
              key={item.name}
              className={`w-[160px] h-[60px] flex ml-[-100px] hover:ml-[-10px] duration-300 ${item.bgColor} rounded-tr-md rounded-br-md mb-[2px]`}
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100
              }}
            >
              {item.href ? (
                <a
                  className='flex justify-between items-center w-full text-gray-300 pl-8 pr-4'
                  href={item.href}
                  target='_blank'
                  rel='noreferrer'
                >
                  {item.name} {item.icon}
                </a>
              ) : (
                <button
                  onClick={item.onClick}
                  className='flex justify-between items-center w-full text-gray-300 pl-8 pr-4'
                >
                  {item.name} {item.icon}
                </button>
              )}
              
              {/* Tooltip for Resume */}
              {item.name === 'Resume' && showTooltip && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className='absolute left-[160px] top-0 bg-secondary text-primary px-4 py-2 rounded-md text-sm whitespace-nowrap'
                >
                  Downloading Resume...
                </motion.div>
              )}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Mobile Social Icons */}
      <div className='lg:hidden fixed bottom-0 left-0 w-full bg-primary py-3 px-4 border-t border-gray-800 z-20'>
        <div className='flex justify-around items-center max-w-[400px] mx-auto'>
          {socialLinks.map((item) => (
            item.href ? (
              <motion.a
                key={item.name}
                href={item.href}
                target='_blank'
                rel='noreferrer'
                className='text-gray-300 hover:text-secondary text-lg sm:text-xl'
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {item.icon}
              </motion.a>
            ) : (
              <motion.button
                key={item.name}
                onClick={item.onClick}
                className='text-gray-300 hover:text-secondary relative text-lg sm:text-xl'
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {item.icon}
                {showTooltip && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: -10 }}
                    exit={{ opacity: 0 }}
                    className='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-secondary text-primary px-2 py-1 rounded text-xs whitespace-nowrap'
                  >
                    Downloading Resume...
                  </motion.div>
                )}
              </motion.button>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar; 