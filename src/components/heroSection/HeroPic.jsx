import React from 'react'
import { SiJupyter } from "react-icons/si";
const HeroPic = () => {
  return (
    <div  className=" h-full flex items-center justify-center ">
      <img src='./images/yacinepr.png'  className="max-h-[400px] w-auto" alt='Yacine Zidane'/>
      <div  className=" absolute -z-10 flex justify-center items-center animate-pulse ">
  
<SiJupyter
  className=" md:h-[90%] sm:h-[120%] min-h-[700px] w-auto text-brandYellow blur-md animate-[spin_20s_linear_infinite] "
/>
      </div>
    </div>
  )
}

export default HeroPic