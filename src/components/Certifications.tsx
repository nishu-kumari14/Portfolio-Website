import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';

const Certifications = () => {
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({});

  const handleImageError = (certId: string) => {
    setImageErrors(prev => ({ ...prev, [certId]: true }));
  };

  const certifications = [
    {
      id: "cert1",
      title: "Ethical Hacking",
      issuer: "NPTEL",
      date: "November 2024",
      category: "Silver + Elite Category",
      description: "Certified in ethical hacking fundamentals with 78% score, covering core cybersecurity practices.",
      image: "/images/cert1.jpg"
    },
    {
      id: "cert2",
      title: "Server-side JavaScript with Node.js",
      issuer: "NIIT",
      date: "November 2024",
      description: "Online course on backend development using Node.js for dynamic web applications.",
      image: "/images/cert2.jpg"
    },
    {
      id: "cert3",
      title: "Full-Stack Web Development",
      issuer: "LinkedIn Learning",
      date: "February 2023",
      description: "Completed a 28-hour learning path covering full-stack web development including front-end and back-end skills.",
      image: "/images/cert3.jpg"
    },
    {
      id: "cert4",
      title: "HTML, CSS, and JavaScript for Web Developers",
      issuer: "Coursera",
      date: "April 2023",
      description: "Front-end development course focused on modern HTML/CSS/JS techniques and responsive design.",
      image: "/images/cert4.jpg"
    },
    {
      id: "cert5",
      title: "Front-End Web Development Career Exploration",
      issuer: "LinkedIn Learning",
      date: "February 2023",
      description: "Explored core front-end web development concepts through a 22-hour learning path. Covered topics in UI/UX design, modern web development practices.",
      image: "/images/cert5.jpg"
    },
    {
      id: "cert6",
      title: "Introduction to Large Language Models",
      issuer: "Google Cloud via Coursera",
      date: "January 2024",
      description: "Completed a certified course introducing the fundamentals of large language models (LLMs) and their applications in AI. Verified by Coursera and Google Cloud.",
      image: "/images/cert6.jpg"
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
              key={cert.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-[#112240] rounded-lg p-6 shadow-lg'
            >
              <div className='flex flex-col gap-4'>
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
                
                {cert.image && !imageErrors[cert.id] && (
                  <div className='mt-4'>
                    <img 
                      src={cert.image} 
                      alt={`${cert.title} certificate`}
                      className='w-full h-auto rounded-lg shadow-md'
                      onError={() => handleImageError(cert.id)}
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications; 