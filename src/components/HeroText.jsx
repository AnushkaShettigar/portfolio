import { FlipWords } from './FlipWords'
import {motion } from 'motion/react'

const HeroText = () => {
  const words = ["Innovative", "Responsive", "User-Friendly"];
  const variants ={
    banana: {opacity: 0, x: -50},
    notbanana: {opacity:1, x:0},
  }
  return (
    <div className=' z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text'>
        {/* desktop text */}
        <div className="flex-col hidden md:flex c-space">
            <motion.h1 
            className="text-4xl font-medium" 
            variants={variants}
            initial="banana" 
            animate="notbanana" 
            transition={{delay:0.8}}>
              Hi I'm Anushka
            </motion.h1>
            <div className="flex flex-col items-start">
                <motion.p 
                className="text-5xl font-medium text-neutral-300"
                variants={variants}
                initial="banana" 
                animate="notbanana" 
                transition={{delay:1}}>
                 A Developer<br /> Dedicated to Crafting
                </motion.p>
                <motion.div
                variants={variants}
                initial="banana" 
                animate="notbanana" 
                transition={{delay:1.2}}>
                  <FlipWords words = {words} className= "font-black text-white text-8xl"/>
                </motion.div>
                <motion.p className="text-4xl font-medium text-neutral-300"
                variants={variants}
                initial="banana" 
                animate="notbanana" 
                transition={{delay:1.4}}>
                  Web Solutions</motion.p>
            </div>
        </div>
        {/* mobileview */}
        <div className='flex flex-col space-y-6 md:hidden'>
          <motion.p className='text-4xl font-medium'>
            Hi I'm Anushka
          </motion.p>
          <div>
            <motion.p className ="text-5xl font-black text-neutral-300">
              Building
            </motion.p>
            <motion.div>
              <FlipWords words = {words} className= "font-bold text-white text-7xl"/>
            </motion.div>
            <motion.p className='text-4xl font-black text-neutral-300'>
              Web Solutions
            </motion.p>
          </div>
        </div>
    </div>
  )
}

export default HeroText