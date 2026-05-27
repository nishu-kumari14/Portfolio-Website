import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Nishu_Kumari_Resume.pdf';
    link.setAttribute('download', 'Nishu_Kumari_Resume.pdf');
    link.setAttribute('target', '_blank');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  };

  const socialLinks = [
    { href: 'https://www.linkedin.com/in/nishu-kumari-lpu/', icon: <FaLinkedin size={18} />, label: 'LinkedIn' },
    { href: 'https://github.com/nishu-kumari14', icon: <FaGithub size={18} />, label: 'GitHub' },
    { href: 'mailto:nishusinghrajput1488@gmail.com', icon: <HiOutlineMail size={20} />, label: 'Email' },
  ];

  return (
    <>
      <motion.header
        className='fixed top-0 left-0 right-0 z-50 transition-all duration-500'
        style={{
          background: scrolled ? 'rgba(10, 25, 47, 0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
          boxShadow: scrolled ? '0 1px 0 rgba(100,255,218,0.08)' : 'none',
        }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className='max-w-[1200px] mx-auto px-6 h-[68px] flex items-center justify-between'>
          {/* Logo */}
          <Link to='home' smooth duration={500} className='cursor-pointer'>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <span className='text-xl font-black text-secondary' style={{ fontFamily: 'Fira Code, monospace' }}>
                NK<span className='text-textSecondary'>.</span>
              </span>
            </motion.div>
          </Link>

          {/* Desktop nav */}
          <nav className='hidden md:flex items-center gap-1'>
            {NAV_LINKS.map((item, i) => (
              <Link
                key={item}
                to={item}
                smooth
                duration={500}
                spy
                onSetActive={() => setActiveSection(item)}
                className='relative px-3 py-2 cursor-pointer group'
              >
                <span
                  className='text-xs mr-1 transition-colors duration-300'
                  style={{
                    fontFamily: 'Fira Code, monospace',
                    color: activeSection === item ? '#64ffda' : 'rgba(100,255,218,0.5)',
                  }}
                >
                  0{i + 1}.
                </span>
                <span
                  className='text-sm font-medium transition-colors duration-300'
                  style={{ color: activeSection === item ? '#64ffda' : '#8892b0' }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </span>
                {activeSection === item && (
                  <motion.span
                    layoutId='nav-underline'
                    className='absolute bottom-0 left-3 right-3 h-px bg-secondary'
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right: social + resume */}
          <div className='hidden md:flex items-center gap-4'>
            {socialLinks.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target='_blank'
                rel='noreferrer'
                title={s.label}
                className='text-textSecondary hover:text-secondary transition-colors duration-300'
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {s.icon}
              </motion.a>
            ))}
            <motion.button
              onClick={handleDownload}
              className='relative flex items-center gap-2 px-4 py-1.5 text-sm text-secondary border border-secondary/60 rounded hover:bg-secondary/10 transition-all duration-300'
              style={{ fontFamily: 'Fira Code, monospace' }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <FaDownload size={12} />
              Resume
              {showTooltip && (
                <motion.span
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='absolute top-full left-1/2 -translate-x-1/2 mt-2 text-xs bg-secondary text-primary px-3 py-1 rounded whitespace-nowrap font-sans'
                >
                  Downloading…
                </motion.span>
              )}
            </motion.button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setNav(!nav)}
            className='md:hidden p-2 text-textSecondary hover:text-secondary transition-colors'
            aria-label='Toggle menu'
          >
            <AnimatePresence mode='wait' initial={false}>
              {nav
                ? <motion.div key='x' initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ opacity: 0 }}>
                    <FaTimes size={20} />
                  </motion.div>
                : <motion.div key='bars' initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ opacity: 0 }}>
                    <FaBars size={20} />
                  </motion.div>
              }
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {nav && (
          <motion.div
            className='fixed inset-0 z-40 flex flex-col items-center justify-center'
            style={{ background: 'rgba(10, 25, 47, 0.97)', backdropFilter: 'blur(16px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav className='flex flex-col items-center gap-7'>
              {NAV_LINKS.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    to={item}
                    smooth
                    duration={500}
                    onClick={() => setNav(false)}
                    className='flex items-center gap-3 text-2xl font-bold text-textPrimary hover:text-secondary transition-colors duration-300 cursor-pointer'
                  >
                    <span className='text-sm text-secondary' style={{ fontFamily: 'Fira Code, monospace' }}>
                      0{i + 1}.
                    </span>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              className='flex gap-6 mt-12'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} target='_blank' rel='noreferrer'
                  className='text-textSecondary hover:text-secondary transition-colors'>
                  {s.icon}
                </a>
              ))}
            </motion.div>

            <motion.button
              onClick={() => { handleDownload(); setNav(false); }}
              className='mt-6 flex items-center gap-2 px-6 py-2 text-secondary border border-secondary/50 rounded hover:bg-secondary/10 transition-all'
              style={{ fontFamily: 'Fira Code, monospace' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <FaDownload size={13} /> Resume
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
