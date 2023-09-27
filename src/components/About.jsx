import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Trigger the animation every time
    threshold: 0.5, // When 50% of the component is in the viewport
  });

  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  return (
    <motion.div
      name="about"
      className="w-full h-screen  text-gray-300"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
      ref={ref}
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="sm:max-w-[50%] md:max-w-[60%] max-w-[80%] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="font-bold text-center inline border-b-4 border-cyan-300 text-5xl text-white">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="sm:max-w-[50%] md:max-w-[60%] max-w-[80%] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold md:border-r-4 md:border-cyan-300 md:pr-5">
            <p>
              Hi. I'm <span className="text-cyan-300 inline">Soham Hegde</span>,
              nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              I am passionate about building excellent software that improves the
              lives of those around me. I am currently pursuing my{' '}
              <span className="text-cyan-300 inline">masters degree in computer science</span> and
              writing a research paper on scalable systems and architecture. I
              specialize in building <span className="text-cyan-300 inline">API's</span> and
              currently I am dipping my toes in <span className="text-cyan-300 inline">microservices</span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
