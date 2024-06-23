'use client';

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '+38-(068)-876-58-77',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'vladyslav.dev.full.stack@gmail.com',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    description: 'Kharkiv, Ukraine',
  },
];

import { motion } from 'framer-motion';

// components
import Form from '@/components/Form';

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className='py-6'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          {/* Form */}
          <Form />
          {/* info */}
          <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
            <ul className='flex flex-col gap-10'>
              {info.map((item, index) => {
                return (
                  <li
                    key={index}
                    className='flex items-center gap-2 md:gap-6 justify-center'
                  >
                    <div className='w-[42px] h-[42px] md:w-[52px] md:h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                      <div className='text-[28px]'>{item.icon}</div>
                    </div>
                    <div className='flex-1'>
                      <p className='text-white/60 text-1xl'>{item.title}</p>
                      <Link href=''>
                        <h3 className='text-xs md:text-xl'>
                          {item.description}
                        </h3>
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
