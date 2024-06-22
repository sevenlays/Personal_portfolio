'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { BsArrowUpRight, BsGithub } from 'react-icons/bs';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import Link from 'next/link';
import Image from 'next/image';
import { Swiper as SwipeType } from 'swiper/types';

//components
import WorkSliderBtns from '@/components/WorkSliderBtns';

const projects = [
  {
    num: '01',
    category: 'Frontend',
    title: '404 Custom Page',
    description:
      'Custom 404 error page is designed to be friendly and informative, guiding users back on track with helpful navigation links and a clear error message.',
    stack: [{ name: 'Html 5' }, { name: 'Css 3' }, { name: 'Javascript' }],
    image: '/assets/work/404.jpg',
    live: 'https://jovial-croissant-701c67.netlify.app/',
    github: 'https://github.com/sevenlays/404_responsive-page',
  },
  {
    num: '02',
    category: 'Frontend',
    title: 'Elecar',
    description:
      "Elecar's landing page is dedicated to showcasing and selling electric vehicles, highlighting their innovation and sustainability.",
    stack: [{ name: 'Html 5' }, { name: 'Css 3' }, { name: 'Javascript' }],
    image: '/assets/work/Elecar.jpg',
    live: 'https://coruscating-moxie-989b14.netlify.app/',
    github: 'https://coruscating-moxie-989b14.netlify.app/',
  },
  {
    num: '03',
    category: 'Frontend',
    title: 'MyBike',
    description:
      "HTML, SCSS, and JavaScript-powered landing page boasts a modern design that's both sleek and adaptable to any device.",
    stack: [{ name: 'Html 5' }, { name: 'Sass' }, { name: 'Javascript' }],
    image: '/assets/work/bike.jpg',
    live: 'https://sevenlays.github.io/layout_landing-page/',
    github: 'https://github.com/sevenlays/My_Bike_Landing/',
  },
  {
    num: '04',
    category: 'Frontend',
    title: 'TodoApp',
    description:
      "HTML, SCSS, and JavaScript-powered landing page boasts a modern design that's both sleek and adaptable to any device.",
    stack: [
      { name: 'Html 5' },
      { name: 'Sass' },
      { name: 'React' },
      { name: 'Typescript' },
    ],
    image: '/assets/work/todo.jpg',
    live: 'https://sevenlays.github.io/react_todo-app-with-api/',
    github: 'https://github.com/sevenlays/TODO_app/',
  },
  {
    num: '05',
    category: 'Fullstack',
    title: 'NiceGangets',
    description:
      "HTML, SCSS, and JavaScript-powered landing page boasts a modern design that's both sleek and adaptable to any device.",
    stack: [
      { name: 'Html 5' },
      { name: 'Sass' },
      { name: 'React' },
      { name: 'Typescript' },
      { name: 'Redux Toolkit' },
      { name: 'Node.js' },
    ],
    image: '/assets/work/NiceGadgets.jpg',
    live: 'https://fs-mar-24-team-5.github.io/react_phone-catalog/#',
    github: 'https://github.com/sevenlays/NiceGadgets',
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwipeType) => {
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              {/* outline num */}
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                {project.num}
              </div>
              {/* Project category */}
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
                {project.category} project
              </h2>
              {/* project description */}
              <p className='text-white/60'>{project.description}</p>
              {/* project stack */}
              <ul className='flex gap-4 flex-wrap'>
                {project.stack.map((tech, index) => {
                  return (
                    <li className='text-xl text-accent' key={index}>
                      {tech.name}
                      {index !== project.stack.length - 1 && ','}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className='border border-white/20'></div>
              {/* buttons */}
              <div className='flex items-center gap-4'>
                {/* Live project */}
                <Link href={project.live} target='_blank'>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* Github repo */}
                <Link href={project.github} target='_blank'>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsGithub className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className='xl:h-[520px] mb-12'
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className='w-full'>
                    <div className='h-[460px] group flex justify-center items-center bg-pink-50/20'>
                      {/* overlay */}
                      <div className='absolute top-0 bottom-0 w-full h-full z-10 bg-transparent'></div>
                      {/* image */}
                      <div className='relative w-full h-full'>
                        <Image
                          src={project.image}
                          alt={`${project.title}`}
                          fill
                          className='object-cover'
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* btns */}
              <WorkSliderBtns
                containerStyles='flex gap-2 absolute z-20 right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'
                btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all'
                iconStyles='text-2xl'
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
