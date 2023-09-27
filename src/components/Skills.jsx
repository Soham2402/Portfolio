import React from 'react';

import {BiLogoPython,BiLogoReact,BiLogoTailwindCss,BiLogoGithub,BiLogoDocker,BiLogoDjango,BiLogoPostgresql} from 'react-icons/bi'
import {SiRabbitmq} from 'react-icons/si'
import { motion } from 'framer-motion';

const Skills = () => {

    const itemList = [
        {
            'logo':<BiLogoPython size='70%' className='w-20 mx-auto' color='cyan'/>,
            'name':'Python'
            
        },
        {
            'logo':<BiLogoReact size='70%' className='w-20 mx-auto' color='cyan'/>,
            'name':'React'
            
        },
        {
            'logo':<BiLogoTailwindCss size='70%' className='w-20 mx-auto' color='cyan'/>,
            'name':'Tailwind'
            
        },
        {
            'logo':<BiLogoDocker size='70%' className='w-20 mx-auto' color='cyan'/>,
            'name':'Docker'
            
        },
        {
            'logo':<BiLogoDjango size='70%' className='w-20 mx-auto' color='cyan'/>,
            'name':'Django'
            
        },
        {
            'logo':<BiLogoGithub size='70%' className='w-20 mx-auto' color='cyan'/>,
            'name':'Github'
            
        },
        {
            'logo':<BiLogoPostgresql size='70%' className='w-20 mx-auto' color='cyan'/>,
            'name':'PostgreSQL'
            
        },
        {
            'logo':<SiRabbitmq size='50%' className='w-20 mx-auto pt-4' color='cyan'/>,
            'name':'RabbitMq'
            
        },

    ]



    const fadeInAnimationVariants = {
        initial:{
            opacity:0.7,
            x:-100,
        },
        animate: (index) =>({
            opacity:1,
            x:0,
            transition:{
                // duration:0.001,
                delay:0.05* index
            },
        }),

    };

  return (
    <div name='skills' className='w-full bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='sm:max-w-[50%] md:max-w-[60%] max-w-[80%] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-cyan-300 '>Skills</p>
              <p className='py-4 font-semibold text-xl'>These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            {
            itemList.map((skill,index)=>
              <motion.div key = {index} 
              variants={fadeInAnimationVariants}
              initial = 'initial'
              whileInView='animate'
              
              custom={index}
              className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  {skill.logo}
                  <p className='my-1'>{skill.name}</p>
              </motion.div>
            )}

          </div>
      </div>
    </div>
  );
};

export default Skills;


