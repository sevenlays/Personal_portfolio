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
                let href;
                if (item.title === 'Phone') {
                  href = `tel:+380688765877`;
                } else if (item.title === 'Email') {
                  href = `mailto:vladyslav.dev.full.stack@gmail.com`;
                } else {
                  href =
                    'https://www.google.com/maps/place/Kolomak,+Kharkiv+Oblast,+63100/@49.782676,35.282382,10z/data=!4m6!3m5!1s0x40d80afe6a639e1d:0x934bd3d7d9b3cfce!8m2!3d49.8408677!4d35.3145782!16s%2Fg%2F12dpx742m?entry=ttu';
                }

                return (
                  <li
                    key={index}
                    className='flex items-center gap-2 md:gap-6 justify-center'
                  >
                    <Link href={href} target='_blank'>
                      <div className='w-[42px] h-[42px] md:w-[52px] md:h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-white/60 hover:text-accent rounded-md flex items-center justify-center transition-all duration-500'>
                        <div className='text-[28px]'>{item.icon}</div>
                      </div>
                    </Link>
                    <div className='flex-1'>
                      <p className='text-white/60 text-1xl'>{item.title}</p>

                      <h3 className='text-xs md:text-xl'>{item.description}</h3>
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
