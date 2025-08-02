import React from 'react'
import AboutMeImage from './AboutMeImage';
import AboutMeText from './AboutMeText';

const AboutMeMain = () => {
  return (
    <div id='about' className="flex md:flex-row sm:flex-col gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center">
    <div className="flex md:flex-row sm:flex-col gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center" id="about">
    <AboutMeText/>
   </div>
   <div>
    <AboutMeImage/>
    </div>
    </div>
  )
}

export default AboutMeMain