import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function TimelineItem({ year, title, duration, details }) {
  const [ref, inView] = useInView({
    triggerOnce: false, // Trigger the animation every time
    threshold: 0.4, // When 50% of the component is in the viewport
  });

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="mb-10 ml-4"
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={animationVariants}
    >
   <motion.ol className="flex flex-col md:flex-row  border-l border-cyan-300 z-0">
      <motion.li className=" mb-10 ml-4">
        
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
         {year}
          </span>
          <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
            {title}
          </h3>
          <div className="my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500">
            {duration}
          </div>
        </p>
        <p className="my-2 text-base font-normal text-stone-500 dark:text-stone-400">
          {details}
        </p>
      </motion.li>
   </motion.ol>
    </motion.div>
  );
}

export default TimelineItem;
