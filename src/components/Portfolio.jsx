import React from 'react';
import portfolio from '../data/projects';
import PortfolioItem from './PortfolioItem';

import { motion } from 'framer-motion';

function Portfolio() {
  const fadeInAnimationVariants = {
    initial:{
        opacity:1,
        y:50,
    },
    animate: (index) =>({
        opacity:1,
        y:0,
        transition:{
            duration:0.001,
            delay:0.05* index
          },
          ease: [0.12, 0,0.39,0]
    }),

};

   return (

    <div name = 'projects' className='w-full  bg-[#0a192f] text-gray-300 pb-11'>
      <div className='sm:max-w-[50%] md:max-w-[60%] max-w-[80%] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-cyan-300 '>Projects</p>
              <p className='py-4 font-semibold text-xl'>These are some simple projects that i've built recently</p>
          </div>


          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
          {portfolio.map((project,index) => (
            <motion.div
            key={index}
            variants={fadeInAnimationVariants}
            initial = 'initial'
            whileInView='animate'
            custom={index}

            className=" border-[1px] border-[#ffffff38] rounded-md overflow-hidden shadow-2xl shadow-[#040c16] hover:scale-110 duration-500">
              <PortfolioItem 
                  key={project.id}
                  imgUrl={project.imgUrl}
                  title={project.title}
                  stack={project.stack}
                  link={project.link}
                  />
            </motion.div>
            ))} 
          </div>
        </div>
    </div>
   )
}

export default Portfolio;

