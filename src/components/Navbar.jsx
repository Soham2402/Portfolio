import React, {useState} from 'react'

import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll' 

import {FaBars, FaTimes} from 'react-icons/fa'
import {VscGithub} from 'react-icons/vsc'
import {GrLinkedin} from 'react-icons/gr'



const navbar = () => {
  const navLinks = [
    {title:'Home',href:"home"},
    {title:'Timeline',href:"timeline"},
    {title:'About',href:"about"},
    {title:'Skills',href:"skills"},
    {title:'Projects',href:"projects"},
    {title:'Contact',href:"contact"},
  ]
  
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  const menuVar =  {
    initial:{
      scaleY: 0,
    },
    animate:{
      scaleY: 1,
      transition:{
        duration: 0.2,
        ease: [0.12, 0,0.39,0]
      }
    },
    exit:{
      scaleY: 0,
      transition:{
        delay:0.5,
        duration: 0.5,
        ease: [0.12, 0,0.39,1]
      }
    }
  }


  const containerVars = {
    initial: {
      transition:{
        staggerChildren: 0.09,
        staggerDirection: 0.9

      },
    },
    open:{
      transition:{
        delayChildren:0.1,
        staggerChildren: 0.09
      }
    }
  }




  return (
    <div className=' z-20'>
      <div className="fixed w-full h-[80px] flex justify-between items-center bg-[#0a192f] text-gray-300 px-6 md:px-8 ">
          <div className='z-10 cursor-pointer'>
            <h1 className='text-3xl font-bold text-cyan-300'>S H</h1>
          </div>

        {/* menu */}
          <ul 
              className='hidden md:flex flex-row gap-11 cursor-pointer z-20'>
              <Link to="home" smooth={true} duration={1000}  className='hover:text-cyan-300 duration-300 text-lg tracking-wide'>Home</Link>
              <Link to="timeline" smooth={true} duration={1000}  className='hover:text-cyan-300 duration-300 text-lg tracking-wide'>TImeline</Link>
              <Link to="about" smooth={true} duration={1000}  className='hover:text-cyan-300 duration-300 text-lg tracking-wide'>About</Link>
              <Link to="skills" smooth={true} duration={1000}  className='hover:text-cyan-300 duration-300 text-lg tracking-wide'>Skills & Projects</Link>
              <Link to="contact" smooth={true} duration={1000} className='hover:text-cyan-300 duration-300 text-lg tracking-wide'>Contact</Link>
            </ul>

        {/* hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
          {
            !nav ? <FaBars color='cyan' size="1.5em" /> : <FaTimes color='cyan' size="1.5em" /> 
          }
        </div> 


      {/* Mobile View */}
      <AnimatePresence>
        {nav && (

          <motion.div 
            variants = {menuVar}
            initial = "initial"
            animate = "animate"
            exit = "exit"
            
            className='fixed top-0 left-0 w-full h-screen bg-[#0a192f] origin-top'>
                <motion.div 
                variants={containerVars}
                initial = "initial"
                animate = "open"
                exit = "initial"
                 className='flex flex-col h-full justify-center items-center  '>
                  
                  {navLinks.map((link, index)=>{
                    return(
                      <Link to={link.href} smooth={true} duration={1000} onClick={handleClick}  key = {index} className="overflow-hidden">
                      <MobileNavLink 
                      key = {index} 
                      title = {link.title} 
                      href = {link.href} />
                      </Link>
                    )
       
                  })}
                  


                </motion.div>

            </motion.div>
        )}

      </AnimatePresence>



          {/* socials */}

          <ul className='fixed md:top-[45%] top-[80%] left-[0%] cursor-pointer z-20 ml-[-12px]'>
            <li>
              <a href="https://github.com/soham2402" target="_blank" rel="noopener noreferrer" className=' px-5'>
                <VscGithub  className='hover:scale-125 duration-300' color='cyan' size='1.9em' />
              </a>
              </li>
            <li>
            <a href="https://www.linkedin.com/in/soham-s-hegde-343870229/" target="_blank" rel="noopener noreferrer">
              <GrLinkedin className='hover:scale-125 duration-300' color='cyan' size='1.9em' />
              </a>
            </li>
          </ul>

      </div>
    </div>
  )
}

export default navbar



const MobileNavLink = ({title,href})=>{

  const mobileLinkVar =  {
    initial:{
      y: "30vh",
      transition:{
        duration: 0.2,
        ease: [0.37, 0,0.63,1]

      },
    },
    open: {
      y: 0,
      transition:{
        duration: 0.5,

      },
    }
  }


  return (
    <motion.div 
    variants={mobileLinkVar}
    className='text-4xl text-cyan-300  font-light p-6 uppercase '>
      <a >
        {title}
      </a>
    </motion.div>
  )
}