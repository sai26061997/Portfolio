
import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import emailjs from "@emailjs/browser"
import { styles } from '../styles'
import {EarthCanvas, EarthCanvas1} from "./canvas"
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import { ovexp} from '../constants'



const AutoScrollList = ({ items }) => {
  const listRef = useRef(null);

  useEffect(() => {
    let currentScrollTop = 0;
    const scrollHeight = listRef.current.scrollHeight;
    const clientHeight = listRef.current.clientHeight;

    const scrollInterval = setInterval(() => {
      if (currentScrollTop < scrollHeight - clientHeight) {
        currentScrollTop += 1
        listRef.current.scrollTo({ top: currentScrollTop, behavior: 'smooth' });
      } else {
        clearInterval(scrollInterval);
      }
    }, 50); // Adjust the interval between each scroll as needed

    return () => clearInterval(scrollInterval);
  }, []);
  return (
    <div  >
      <h3 className={`${styles.heroHeadText} text-white`}>  EXPE 
            <span className='text-[#915eff]'>
            RIENCE</span></h3>
      
      <ul className="list-disc ml-5 space-y-2 mt-5 h-80 overflow-hidden" ref={listRef} >
        {items.map((point, index) => (
          <li
            key={`expereince index ${index}`}
            className="text-white-100 text-[20px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};


const Exp=()=>{

    return (
        <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
          <motion.div
          variants={slideIn("left","tween",0.2,1)}
          className='flex-[0.75]  p-8 rounded-2xl h-[520px] w-[340px]'
          >
            <div className={`${styles.paddingX} absolute inset-0 top-[12px] max-w-7xl mx-auto  flex flex-row items-start gap-5`}>
        <div className='flex flex-col
        justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40
          violet-gradient' />
        </div>
        
       <AutoScrollList items={ovexp}/>
        
        </div>
          </motion.div>
    
          <motion.div 
          variants={slideIn("right","tween",0.2,1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
          >
          <EarthCanvas1/>
          </motion.div>
        </div>
      )
} 


export default  SectionWrapper(Exp,"Exp")
