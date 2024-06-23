'use client';

import {
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaJs,
  FaFigma,
  FaCss3,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiTypescript,
  SiMysql,
} from 'react-icons/si';

// about data
const about = {
  title: 'About me',
  description:
    'I am a full-stack developer with two years of expertise in JavaScript, TypeScript, React, and Node.js, specializing in delivering scalable web applications. I excel at creating collaborative team environments and have a strong track record of building relationships and navigating diverse stakeholders effectively. My experience with international clients has enhanced my cross-cultural communication skills. I am a passionate problem solver dedicated to achieving impactful results through creativity and persistence.',
  info: [
    { fieldName: 'Name', fieldValue: 'Vladyslav Ivanov' },
    { fieldName: 'Phone', fieldValue: '+380688765877' },
    { fieldName: 'Experience', fieldValue: '2 years' },
    { fieldName: 'Nationality', fieldValue: 'Ukrainian' },
    // { fieldName: 'Languages', fieldValue: 'English, Ukrainian' },
    // { fieldName: 'Email', fieldValue: 'vladyslav.dev.full.stack@gmail.com' },
    { fieldName: 'English Level', fieldValue: 'B1' },
    // { fieldName: 'Telegram', fieldValue: 't.me/Vladislav_Ivanov_Dev' },
  ],
};

// experiance data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My Experience',
  description:
    'I have two years of experience developing my own web applications, work proficiently with React and TypeScript, and have a strong background in building scalable and efficient web solutions.',

  items: [
    {
      company: 'Self Employed',
      position: 'Full-stack Developer',
      duration: 'December 2023 - now',
    },
    {
      company: 'KVH Media Group',
      position: 'Application Developer',
      duration: 'May 2022 - November 2023',
    },
    {
      company: 'Freelance',
      position: 'Frontend Developer',
      duration: 'May 2022 - November 2022',
    },
  ],
};

// education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My Education',
  description:
    'I have a Specialist Degree from Kharkiv Polytechnic University, which I earned between 2012 and 2017. During my studies, I focused on algorithms and data structures for 1.5 years, developing simple projects and solving algorithmic problems using Pascal. Additionally, I completed the Mate Academy Full-Stack (Full-Day) Course and took React and JavaScript courses on Udemy in 2023.',

  items: [
    {
      institution: 'Mate Acamedy',
      degree: 'Full-stack Web Developer',
      duration: 'Mar 2024 - Jul 2024',
    },
    {
      institution: 'Udemy',
      degree: 'React developer',
      duration: 'Sep 2022 - Nov 2022',
    },
    {
      institution: 'Udemy',
      degree: 'JavaScript developer',
      duration: 'July 2022 - Sep 2022',
    },
    {
      institution: 'Kharkiv Polytechnic Univ.',
      degree: 'Oil & Gas Specialist',
      duration: '2012 - 2017',
    },
  ],
};

// skills data
const skills = {
  title: 'My skills',
  description:
    'My skill set includes proficiency in HTML5, CSS3, Sass (SCSS), JavaScript, TypeScript, React, Redux, Node.js, and SQL. I have practical experience and expertise in developing web applications and handling database operations using these technologies.',

  skillsList: [
    {
      icon: <FaHtml5 />,
      name: 'html 5',
    },
    {
      icon: <FaCss3 />,
      name: 'css 3',
    },
    {
      icon: <FaJs />,
      name: 'javascript',
    },
    {
      icon: <SiTypescript />,
      name: 'typescript',
    },
    {
      icon: <FaReact />,
      name: 'react',
    },
    {
      icon: <SiRedux />,
      name: 'redux',
    },
    {
      icon: <SiMysql />,
      name: 'mysql',
    },
    {
      icon: <FaNodeJs />,
      name: 'node.js',
    },
    {
      icon: <SiNextdotjs />,
      name: 'next.js',
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwind.css',
    },
    {
      icon: <FaFigma />,
      name: 'figma',
    },
  ],
};

import { Tabs, TabsContent, TabsTrigger, TabsList } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className='container mx-auto'>
        <Tabs
          defaultValue='experiance'
          className='flex flex-col xl:flex-row gap-[60px]'
        >
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='about'>About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className='min-h-[70vh] w-full'>
            {/* experiance */}
            <TabsContent value='experiance' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {experience.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                        >
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                            {item.position}
                          </h3>
                          <div className='flex items-center gap-3'>
                            {/* dot */}
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value='education' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {education.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                        >
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                            {item.degree}
                          </h3>
                          <div className='flex items-center gap-3'>
                            {/* dot */}
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value='skills' className='w-full h-full'>
              <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                    {skills.description}
                  </p>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4'>
                  {skills.skillsList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                              <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className='capitalize'>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value='about'
              className='w-full'
            >
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {about.description}
                </p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className='flex items-center justify-center xl:justify-start gap-4'
                      >
                        <span className='text-white/60'>{item.fieldName}</span>
                        <span className='text-xl'>{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
