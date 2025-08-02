import React from 'react'

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center ">
      <h2 className="text-5xl text-orange   mb-10">About Me</h2>
      <p className="text-white font-medium">
I'm Yacine, a freelance software engineer with a strong focus on delivering high-quality, real-world applications. I specialize in building modern web and mobile solutions using HTML, CSS, JavaScript, React, Laravel, PHP, and Flutter. I work closely with clients to bring their ideas to life—whether it's a custom website, a mobile app, or a full-stack system. My goal is to create fast, responsive, and user-friendly digital products that solve real problems and add real value. I'm always learning and evolving to stay ahead in the fast-paced tech world.
</p>
<button  className="px-4 py-2 rounded-full text-xl font-bold font-body text-white border-lightCyan border flex items-center gap-1 bg-gradient-to-r  from-lightCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow mt-10">My Projects</button>
    </div>
  )
}

export default AboutMeText