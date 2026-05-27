import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';

interface Cert {
  title: string;
  issuer: string;
  date: string;
  description: string;
  category?: string;
  color: string;
}

const Certifications = () => {
  const certifications: Cert[] = [
    {
      title: 'Ethical Hacking',
      issuer: 'NPTEL',
      date: 'Nov 2024',
      category: 'Silver + Elite — 72%',
      description: 'Certified in ethical hacking fundamentals covering core cybersecurity practices, penetration testing concepts, and vulnerability assessment.',
      color: '#64ffda',
    },
    {
      title: 'Server-side JavaScript with Node.js',
      issuer: 'NIIT',
      date: 'Nov 2024',
      description: 'Backend development using Node.js for building scalable, dynamic web applications with REST API design.',
      color: '#68A063',
    },
    {
      title: 'Full-Stack Web Development',
      issuer: 'LinkedIn Learning',
      date: 'Feb 2023',
      description: '28-hour learning path covering full-stack development including React, Node.js, databases, and deployment best practices.',
      color: '#0A66C2',
    },
    {
      title: 'HTML, CSS, and JavaScript for Web Developers',
      issuer: 'Coursera',
      date: 'Apr 2023',
      description: 'Front-end development course focused on modern HTML/CSS/JS techniques, responsive design, and web standards.',
      color: '#4285F4',
    },
    {
      title: 'Front-End Web Development',
      issuer: 'LinkedIn Learning',
      date: 'Feb 2023',
      description: '22-hour learning path exploring core front-end concepts, UI/UX design fundamentals, and modern web development practices.',
      color: '#0A66C2',
    },
    {
      title: 'Introduction to Large Language Models',
      issuer: 'Google Cloud · Coursera',
      date: 'Jan 2024',
      description: 'Certified course covering LLM fundamentals, transformer architecture, prompt engineering, and real-world AI applications.',
      color: '#EA4335',
    },
  ];

  return (
    <section id='certifications' className='w-full min-h-screen py-24'>
      <div className='max-w-[1100px] mx-auto px-6'>

        {/* Heading */}
        <motion.div
          className='mb-14'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className='text-sm text-secondary mb-2' style={{ fontFamily: 'Fira Code, monospace' }}>05. certifications</p>
          <h2 className='text-3xl sm:text-4xl font-black text-textPrimary'>Certifications</h2>
          <div className='w-12 h-0.5 bg-secondary mt-3' />
        </motion.div>

        {/* Grid */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className='flex flex-col rounded-xl overflow-hidden group'
              style={{
                background: 'rgba(17,34,64,0.55)',
                border: '1px solid rgba(100,255,218,0.08)',
                backdropFilter: 'blur(8px)',
              }}
              whileHover={{
                y: -5,
                borderColor: `${cert.color}35`,
                transition: { duration: 0.2 },
              }}
            >
              {/* Colored top strip */}
              <div
                className='h-1.5 w-full'
                style={{ background: `linear-gradient(90deg, ${cert.color}, ${cert.color}55)` }}
              />

              <div className='p-5 flex flex-col flex-1'>
                <div className='flex items-start gap-3 mb-3'>
                  <div
                    className='mt-0.5 shrink-0 p-2 rounded-lg'
                    style={{ background: `${cert.color}15`, color: cert.color }}
                  >
                    <FaCertificate size={18} />
                  </div>
                  <div className='flex-1 min-w-0'>
                    <h3 className='font-bold text-textPrimary text-sm leading-snug group-hover:text-secondary transition-colors duration-300'>
                      {cert.title}
                    </h3>
                    <div className='flex items-center gap-2 mt-1 flex-wrap'>
                      <span className='text-xs font-medium' style={{ color: cert.color }}>{cert.issuer}</span>
                      <span className='text-textSecondary/40 text-xs'>·</span>
                      <span className='text-xs text-textSecondary' style={{ fontFamily: 'Fira Code, monospace' }}>
                        {cert.date}
                      </span>
                    </div>
                  </div>
                </div>

                {cert.category && (
                  <div
                    className='inline-flex self-start px-2.5 py-0.5 rounded-full text-xs font-medium mb-3'
                    style={{ background: `${cert.color}15`, color: cert.color, border: `1px solid ${cert.color}30` }}
                  >
                    {cert.category}
                  </div>
                )}

                <p className='text-textSecondary text-xs leading-relaxed flex-1'>{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
