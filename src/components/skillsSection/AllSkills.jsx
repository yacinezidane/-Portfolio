import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiFlutter } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import SingleSkill from './SingleSkill';
import { FaLaravel } from "react-icons/fa";
const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "Flutter",
    icon: SiFlutter,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "Redux",
    icon: SiRedux,
  },
  {
    skill: "NodeJS",
    icon:IoLogoNodejs,
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
  {
      skill: "Laravel",
      icon:FaLaravel,
  }
];
const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return <SingleSkill
           key={index}
           text={item.skill}
           imgSvg={<item.icon />}
          />
        })}
      </div>
    </div>
  )
}

export default AllSkills