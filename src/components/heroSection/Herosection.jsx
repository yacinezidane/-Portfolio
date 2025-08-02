import React from 'react'

const Herosection = () => {
  return (
   <div className="absolute bottom-8  transform  z-50 flex gap-6">
  <a
    href="https://github.com/yacine"
    target="_blank"
    className="group bg-white shadow-lg rounded-full p-4 hover:bg-blue-600 transition duration-300"
  >
    <i className="fab fa-github text-blue-600 group-hover:text-cyan text-2xl transition duration-300 transform group-hover:scale-110"></i>
  </a>
  <a
    href="https://linkedin.com/in/yacine"
    target="_blank"
    className="group bg-white shadow-lg rounded-full p-4 hover:bg-blue-600 transition duration-300"
  >
    <i className="fab fa-linkedin text-blue-600 group-hover:text-cyan text-2xl transition duration-300 transform group-hover:scale-110"></i>
  </a>
  <a
    href="mailto:example@email.com"
    className="group bg-white shadow-lg rounded-full p-4 hover:bg-blue-600 transition duration-300"
  >
    <i className="fas fa-envelope text-blue-600 group-hover:text-cyan text-2xl transition duration-300 transform group-hover:scale-110"></i>
  </a>
</div>

  )
}

export default Herosection;