import React from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarBtn from "./NavbarBtn";
import NavbarLinks from "./NavbarLinks";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const NavbarMain = () => {
  const [menuOpen,setMenuOpen]=useState(false);
  const toggleMenu =()=>{
    setMenuOpen(!menuOpen)
  }
  return (
   <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1300px] px-4">
  <div className="w-full bg-white/10 backdrop-blur-md border border-orange-400 shadow-md p-2 md:p-4 rounded-full flex items-center justify-between">

    {/* الشعار */}
    <div className="flex items-center flex-1">
      <NavbarLogo />
    </div>

    {/* الروابط - في المنتصف تمامًا */}
    
      <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`} >
      <NavbarLinks />
      </div>  
    

    {/* الزر - في اليسار (عند LTR) */}
    <div className="hidden lg:flex items-center justify-end flex-1">
      <NavbarBtn />
    </div>

    {/* زر الهامبرغر في الموبايل */}
    <div className="lg:hidden flex items-center justify-center ">
      <button className="text-white border border-orange-400 p-3 rounded-full hover:bg-orange-400 hover:text-orange transition-all duration-300" onClick={toggleMenu}>
        <GiHamburgerMenu className="text-2xl" />
      </button>
    </div>

  </div>
</nav>

  );
};

export default NavbarMain;