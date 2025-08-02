import React from 'react'
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';
const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
   <h2 className='lg:text-2xl sm:text-xl uppercase text-cyan'>Software Engineer</h2>
   <h1 className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase">Yacine Zidane</h1>
   <p className="text-xl mt-6 text-white leading-relaxed font-medium tracking-wide drop-shadow-md ">
  Software Engineer with 4 years of experience,<br />
  specialized in web and mobile app development<br/> using modern technologies.
</p>
    </div>
  )
}

export default HeroText