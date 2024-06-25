import React,{useState} from 'react'
import { IoIosMenu } from "react-icons/io";

const Header = () => {

  const [toggleMenu, setToggleMenu] =useState(false);
  return (
   <header className='flex justify-between px-6 pt-7 bg-primary py-4'>
       <a className='font-bold text-black text-xl'href="#">KAVISHRI S</a>
    <nav className="hidden md:block">
      <ul className='flex text-black text-base'>
        <li><a href="/">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#coursework">COURSEWORK</a></li>
        <li><a href="#projects">PROJECTS</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </nav>

    {/* mobile view */}
    {toggleMenu && (<nav className="block md:hidden mob-nav">
      <ul className='flex flex-col text-white text-base'>
        <li><a href="/">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#coursework">COURSEWORK</a></li>
        <li><a href="#projects">PROJECTS</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </nav>)}
    <button  onClick={()=>setToggleMenu(!toggleMenu)} className='block md:hidden'><IoIosMenu  className='w-20  text-black h-5 font-bold'/></button>

   </header>
  )
}

export default Header;