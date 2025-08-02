import React from "react";
import NavbarMain from "./components/navbar/NavbarMain";
import HeroMain from './components/heroSection/HeroMain';
import HeroGradient from "./components/heroSection/HeroGradient";
import Herosection from "./components/heroSection/Herosection";
import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import HelperSection from "./components/HelperSection";
import SkillsMain from './components/skillsSection/SkillsMain';
import SubSkills from "./components/skillsSection/SubSkills";


function App() {
  return (
    <main className="font-body">
    <NavbarMain/>
    <HeroMain/>
    <HeroGradient/>
   
    <AboutMeMain/>
    <SkillsMain/>
    <SubSkills/>
    <HelperSection/>
    </main>
    
  );
}

export default App;
