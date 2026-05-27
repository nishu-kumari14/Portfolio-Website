import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaChevronDown } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { Link } from 'react-scroll';
import profileImg from '../assets/images/profile.jpg';

const ROLES = ['Web Developer', 'Data Enthusiast', 'Problem Solver', 'CS Student @ LPU'];

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting'>('typing');

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout: NodeJS.Timeout;

    if (phase === 'typing') {
      if (charIndex < current.length) {
        timeout = setTimeout(() => setCharIndex(c => c + 1), 90);
      } else {
        timeout = setTimeout(() => setPhase('deleting'), 2200);
      }
    } else if (phase === 'deleting') {
      if (charIndex > 0) {
        timeout = setTimeout(() => setCharIndex(c => c - 1), 45);
      } else {
        setPhase('typing');
        setRoleIndex(r => (r + 1) % ROLES.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, phase, roleIndex]);

  const displayText = ROLES[roleIndex].substring(0, charIndex);

  const stats = [
    { value: '8+', label: 'Projects' },
    { value: '8.34', label: 'CGPA' },
    { value: '6', label: 'Certifications' },
  ];

  const socials = [
    { href: 'https://github.com/nishu-kumari14', icon: <FaGithub size={20} />, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/nishu-kumari-lpu/', icon: <FaLinkedin size={20} />, label: 'LinkedIn' },
    { href: 'mailto:nishusinghrajput1488@gmail.com', icon: <HiMail size={22} />, label: 'Email' },
  ];

  return (
    <section id='home' className='relative w-full min-h-screen flex items-center overflow-hidden'>
      {/* Background glows */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-1/3 right-1/3 w-[500px] h-[500px] rounded-full'
          style={{ background: 'radial-gradient(circle, rgba(100,255,218,0.04) 0%, transparent 70%)' }} />
        <div className='absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full'
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.04) 0%, transparent 70%)' }} />
      </div>

      <div className='max-w-[1200px] mx-auto px-6 pt-24 pb-20 w-full grid md:grid-cols-2 gap-16 items-center'>

        {/* Left — text */}
        <motion.div
          className='order-2 md:order-1'
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.p
            className='text-secondary text-sm sm:text-base mb-4 tracking-widest uppercase'
            style={{ fontFamily: 'Fira Code, monospace' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            className='text-4xl sm:text-5xl xl:text-6xl font-black text-textPrimary mb-3 leading-tight'
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Nishu Kumari
          </motion.h1>

          <motion.h2
            className='text-xl sm:text-2xl xl:text-3xl font-bold text-textSecondary mb-7 h-9 flex items-center gap-1'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className='text-secondary'>{displayText}</span>
            <span
              className='inline-block w-[2px] h-7 bg-secondary'
              style={{ animation: 'blink 1s step-end infinite' }}
            />
          </motion.h2>

          <motion.p
            className='text-textSecondary text-sm sm:text-base leading-relaxed max-w-[500px] mb-9'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Computer Science student at Lovely Professional University building responsive full-stack
            applications and exploring data science and cybersecurity.
          </motion.p>

          <motion.div
            className='flex flex-wrap gap-4 mb-10'
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link to='projects' smooth duration={500}>
              <motion.button
                className='px-7 py-3 bg-secondary text-primary text-sm font-bold rounded transition-all duration-300 hover:bg-secondary/90 hover:shadow-lg'
                style={{ boxShadow: 'none' }}
                whileHover={{ scale: 1.04, boxShadow: '0 0 24px rgba(100,255,218,0.25)' }}
                whileTap={{ scale: 0.97 }}
              >
                View Projects
              </motion.button>
            </Link>
            <Link to='contact' smooth duration={500}>
              <motion.button
                className='px-7 py-3 border border-secondary text-secondary text-sm font-bold rounded transition-all duration-300 hover:bg-secondary/10'
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Contact Me
              </motion.button>
            </Link>
          </motion.div>

          {/* Socials */}
          <motion.div
            className='flex items-center gap-5'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target='_blank'
                rel='noreferrer'
                title={s.label}
                className='text-textSecondary hover:text-secondary transition-colors duration-300'
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {s.icon}
              </motion.a>
            ))}
            <span className='w-16 h-px bg-textSecondary/30' />
          </motion.div>
        </motion.div>

        {/* Right — image + stats */}
        <motion.div
          className='order-1 md:order-2 flex flex-col items-center gap-8'
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {/* Profile image with glow ring */}
          <div className='relative'>
            <motion.div
              className='absolute -inset-2 rounded-full'
              style={{ background: 'conic-gradient(from 0deg, #64ffda, #3b82f6, #64ffda)' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />
            <div className='relative w-52 h-52 sm:w-64 sm:h-64 xl:w-72 xl:h-72 rounded-full p-1'
              style={{ background: '#0a192f' }}>
              <img
                src={profileImg}
                alt='Nishu Kumari'
                className='w-full h-full object-cover rounded-full'
              />
            </div>
          </div>

          {/* Quick stats */}
          <div className='flex gap-4'>
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className='glass-card flex flex-col items-center px-5 py-3 rounded-xl cursor-default'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{ scale: 1.06, borderColor: 'rgba(100,255,218,0.35)' }}
              >
                <span className='text-2xl font-black text-secondary'>{stat.value}</span>
                <span className='text-xs text-textSecondary mt-0.5 whitespace-nowrap'>{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-textSecondary/50'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className='text-xs tracking-widest uppercase' style={{ fontFamily: 'Fira Code, monospace' }}>scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          <FaChevronDown size={13} />
        </motion.div>
      </motion.div>

      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </section>
  );
};

export default Home;
