import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';

const Certifications = () => {
  const certifications = [
    {
      title: "Ethical Hacking Course",
      issuer: "Great Learning",
      date: "2024",
      category: "Silver + Elite Category",
      description: "Comprehensive course covering cybersecurity fundamentals and ethical hacking practices."
    },
    {
      title: "Web Development",
      issuer: "Udemy",
      date: "2023",
      description: "Full-stack web development course covering modern technologies and best practices."
    },
    {
      title: "Python Programming",
      issuer: "Coursera",
      date: "2022",
      description: "Advanced Python programming concepts and applications in data science."
    },
    {
      title: "Data Structures and Algorithms",
      issuer: "GeeksforGeeks",
      date: "2022",
      description: "In-depth study of data structures, algorithms, and problem-solving techniques."
    }
  ];

  return (
    <div id='certifications' className='w-full min-h-screen text-gray-300 py-20'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='pb-8'
        >
          <p className='text-4xl font-bold inline border-b-4 border-secondary'>
            Certifications
          </p>
          <p className='py-6'>Check out my professional certifications and achievements</p>
        </motion.div>

        <div className='grid sm:grid-cols-2 gap-8'>
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-[#112240] rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1'
            >
              <div className='flex items-start gap-4'>
                <div className='text-secondary'>
                  <FaCertificate size={30} />
                </div>
                <div className='flex-1'>
                  <h3 className='text-xl font-bold text-secondary mb-2'>{cert.title}</h3>
                  <p className='text-sm text-gray-400 mb-1'>
                    {cert.issuer} • {cert.date}
                  </p>
                  {cert.category && (
                    <p className='text-sm text-emerald-400 mb-2'>
                      {cert.category}
                    </p>
                  )}
                  <p className='text-gray-300 text-sm'>
                    {cert.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications; 