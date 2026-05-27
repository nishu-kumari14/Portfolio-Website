import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

interface FormField {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [form, setForm] = useState<FormField>({ name: '', email: '', message: '' });
  const [focused, setFocused] = useState<keyof FormField | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  const inputBase = 'w-full bg-transparent outline-none text-textPrimary text-sm transition-colors duration-300 pb-2';
  const labelBase = 'absolute left-0 text-sm transition-all duration-300 pointer-events-none';

  const isActive = (field: keyof FormField) => focused === field || form[field] !== '';

  const contactLinks = [
    {
      label: 'Email',
      value: 'nishusinghrajput1488@gmail.com',
      href: 'mailto:nishusinghrajput1488@gmail.com',
      icon: <HiMail size={20} />,
      color: '#EA4335',
    },
    {
      label: 'LinkedIn',
      value: '/in/nishu-kumari-lpu',
      href: 'https://www.linkedin.com/in/nishu-kumari-lpu/',
      icon: <FaLinkedin size={18} />,
      color: '#0A66C2',
    },
    {
      label: 'GitHub',
      value: 'nishu-kumari14',
      href: 'https://github.com/nishu-kumari14',
      icon: <FaGithub size={18} />,
      color: '#ccd6f6',
    },
  ];

  return (
    <section id='contact' className='w-full min-h-screen py-24'>
      <div className='max-w-[1000px] mx-auto px-6'>

        {/* Heading */}
        <motion.div
          className='mb-16 text-center'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className='text-sm text-secondary mb-2' style={{ fontFamily: 'Fira Code, monospace' }}>06. contact</p>
          <h2 className='text-3xl sm:text-4xl font-black text-textPrimary'>Get In Touch</h2>
          <div className='w-12 h-0.5 bg-secondary mt-3 mx-auto mb-6' />
          <p className='text-textSecondary max-w-[500px] mx-auto text-sm sm:text-base leading-relaxed'>
            I'm currently open to new opportunities. Whether you have a question, a project idea, or just
            want to say hi — my inbox is always open.
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 gap-12'>

          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='flex flex-col gap-5'
          >
            <h3 className='text-xl font-bold text-textPrimary'>Let's Connect</h3>

            {contactLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target='_blank'
                rel='noreferrer'
                className='flex items-center gap-4 p-4 rounded-xl group transition-all duration-300'
                style={{
                  background: 'rgba(17,34,64,0.55)',
                  border: '1px solid rgba(100,255,218,0.08)',
                }}
                whileHover={{ x: 6, borderColor: `${link.color}35` }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <div
                  className='w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300'
                  style={{ background: `${link.color}15`, color: link.color }}
                >
                  {link.icon}
                </div>
                <div>
                  <p className='text-xs text-textSecondary mb-0.5'>{link.label}</p>
                  <p className='text-sm text-textPrimary group-hover:text-secondary transition-colors duration-300 font-medium'>
                    {link.value}
                  </p>
                </div>
              </motion.a>
            ))}

            <motion.p
              className='text-textSecondary text-sm leading-relaxed mt-2 pt-4'
              style={{ borderTop: '1px solid rgba(100,255,218,0.08)' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Based in India · Available for remote work &amp; internships
            </motion.p>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className='flex flex-col gap-8'>

              {/* Name */}
              <div className='relative'>
                <label
                  className={labelBase}
                  style={{
                    top: isActive('name') ? '-16px' : '0px',
                    fontSize: isActive('name') ? '10px' : '14px',
                    color: focused === 'name' ? '#64ffda' : '#8892b0',
                    fontFamily: isActive('name') ? 'Fira Code, monospace' : 'inherit',
                  }}
                >
                  Name
                </label>
                <input
                  type='text'
                  name='name'
                  value={form.name}
                  onChange={handleChange}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  className={inputBase}
                  style={{
                    borderBottom: `1px solid ${focused === 'name' ? '#64ffda' : 'rgba(100,255,218,0.2)'}`,
                  }}
                  required
                />
              </div>

              {/* Email */}
              <div className='relative'>
                <label
                  className={labelBase}
                  style={{
                    top: isActive('email') ? '-16px' : '0px',
                    fontSize: isActive('email') ? '10px' : '14px',
                    color: focused === 'email' ? '#64ffda' : '#8892b0',
                    fontFamily: isActive('email') ? 'Fira Code, monospace' : 'inherit',
                  }}
                >
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  value={form.email}
                  onChange={handleChange}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  className={inputBase}
                  style={{
                    borderBottom: `1px solid ${focused === 'email' ? '#64ffda' : 'rgba(100,255,218,0.2)'}`,
                  }}
                  required
                />
              </div>

              {/* Message */}
              <div className='relative'>
                <label
                  className={labelBase}
                  style={{
                    top: isActive('message') ? '-16px' : '0px',
                    fontSize: isActive('message') ? '10px' : '14px',
                    color: focused === 'message' ? '#64ffda' : '#8892b0',
                    fontFamily: isActive('message') ? 'Fira Code, monospace' : 'inherit',
                  }}
                >
                  Message
                </label>
                <textarea
                  name='message'
                  value={form.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  rows={5}
                  className={`${inputBase} resize-none`}
                  style={{
                    borderBottom: `1px solid ${focused === 'message' ? '#64ffda' : 'rgba(100,255,218,0.2)'}`,
                  }}
                  required
                />
              </div>

              <motion.button
                type='submit'
                className='flex items-center justify-center gap-2.5 w-full py-4 rounded-xl text-sm font-bold transition-all duration-300'
                style={{
                  background: submitted
                    ? 'rgba(100,255,218,0.15)'
                    : 'linear-gradient(135deg, rgba(100,255,218,0.15), rgba(59,130,246,0.1))',
                  border: '1px solid rgba(100,255,218,0.4)',
                  color: '#64ffda',
                }}
                whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(100,255,218,0.15)' }}
                whileTap={{ scale: 0.98 }}
              >
                {submitted ? (
                  <>Message Sent ✓</>
                ) : (
                  <>
                    <FaPaperPlane size={14} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.p
          className='text-center text-textSecondary/40 text-xs mt-20'
          style={{ fontFamily: 'Fira Code, monospace' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Designed &amp; Built by Nishu Kumari
        </motion.p>
      </div>
    </section>
  );
};

export default Contact;
