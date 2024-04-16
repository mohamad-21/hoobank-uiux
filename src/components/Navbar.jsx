import React, { useState } from 'react'
import { logo } from '../assets';
import { navLinks } from '../constants';
import { menu, close } from '../assets';
import { useLocation } from "react-router-dom";

const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  const { hash } = useLocation();

  return (
    <nav className="flex items-center justify-between py-8 relative">
      <a href="/">
        <img src={logo} alt="logo" className="w-[82px] h-[23px]" />
      </a>

      <ul className="hidden items-center gap-5 text-sm sm:flex">
        {navLinks.map(link => (
          <li key={link.id}>
            <a href={`#${link.id}`} className={`hover:text-white ${hash === '#' + link.id ? 'text-white' : 'text-dimWhite'}`}>{link.title}</a>
          </li>  
        ))}
      </ul>

      <div className="sm:hidden block">

        <button onClick={() => setToggle(!toggle)}>
          <img 
            src={toggle ? close : menu} 
            className="w-[25px] h-[25px]"
            alt="menu"
          />
        </button>

        <div className={`${toggle ? 'flex' : 'hidden'} bg-black-gradient w-[150px] absolute top-20 right-0 p-6 rounded-xl items-center justify-center sidebar`}>
          <ul className="flex flex-col text-center gap-4 text-sm">
            {navLinks.map(link => (
              <li key={link.id}>
                <a href={`#${link.id}`} className={`hover:text-white ${hash === '#' + link.id ? 'text-white' : 'text-dimWhite'}`}>{link.title}</a>
              </li>  
            ))}
          </ul>
        </div>

      </div>

    </nav>
  )
}

export default Navbar