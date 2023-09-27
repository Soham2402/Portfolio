import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Trigger the animation every time
    threshold: 0.4 // When 50% of the component is in the viewport
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 }, ease: [0.12, 0,0.39,0]},
  };

  return (
    <motion.div
    className="h-[100vh] bg-[#0a192f] flex flex-col justify-center items-center"
    name="home"
    >
      {/* container */}
      <motion.section
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={containerVariants}
            ref={ref}
        className="sm:max-w-[50%] md:max-w-[60%] max-w-[80%] flex flex-col gap-1 ml-6 mt-12"

      >
        <motion.p className="text-cyan-300 text-lg" variants={containerVariants}>
          Hi, my name is
        </motion.p>
        <motion.h1
          className="md:text-7xl text-5xl font-bold text-[white]"
          variants={containerVariants}
        >
          Soham Hegde
        </motion.h1>
        <motion.h2
          className="text-[#8892b0] md:text-7xl text-4xl font-bold inline"
          variants={containerVariants}
        >
          I am a{' '}
          <motion.p className="text-cyan-300 inline" variants={containerVariants}>
            FullStack Developer.
          </motion.p>
        </motion.h2>
        <motion.p
          className="text-[#8892b0] py-3 md:max-w-[700px] max-w-[95%]"
          variants={containerVariants}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia voluptatem harum
          quisquam excepturi, quam nulla aperiam veniam assumenda officiis non corporis
          laborum maxime deleniti nisi natus fuga obcaecati vel quaerat.
        </motion.p>

        <div>
          <button
            className="text-white hover:text-cyan-300 group border-2 px-6 py-3 my-2 mt-[-5px] md:mt-[0px] flex items-center hover:border-cyan-300"
            variants={containerVariants}
          >
            View Work
            <span
              className="hover:rotate-90 duration-300"
              variants={containerVariants}
            >
              <HiArrowNarrowRight className="ml-3 hover:tranlate" />
            </span>
          </button>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Home;
