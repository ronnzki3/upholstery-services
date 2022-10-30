import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll'

export const Navbar = () => {

  const [nav,setNav] =useState(false);

  const handleClick=()=>setNav(!nav);

  return (
    <div className='fixed w-full mx-auto h-auto z-10 bg-slate-800 text-gray-300'>

        <div className='max-w-[1366px] w-full h-full flex justify-between items-center p-5 mx-auto'>
            <div className='flex-col group cursor-pointer z-50'>
                  <Link to="home" smooth={true} duration={1000}>
                     <h1 className='text-3xl md:text-5xl font-bold text-violet-300 group-hover:text-pink-200'>LV</h1>
                     <p className='text-base md:text-xl font-semibold text-indigo-500 group-hover:text-blue-200'>Upholstery Services</p>
                  </Link>
            </div>           
            <ul className='hidden md:flex justify-end'>
                <li className='mr-[20px] text-2xl hover:text-violet-200 hover:scale-110 duration-500 cursor-pointer'>
                  <Link to="home" smooth={true} duration={1000}>
                  Home
                  </Link>
                </li>
                <li className='mr-[20px] text-2xl hover:text-violet-200 cursor-pointer hover:scale-110 duration-500'>
                  <Link to="about" smooth={true} duration={1000}>
                  About
                  </Link>
                </li>
                <li className='mr-[20px] text-2xl hover:text-violet-200 cursor-pointer hover:scale-110 duration-500'>
                <Link to="services" smooth={true} duration={1000}>
                Services
                </Link>
                </li>
                <li className='mr-[20px] text-2xl hover:text-violet-200 cursor-pointer hover:scale-110 duration-500'>
                <Link to="portfolio" smooth={true} duration={1000}>
                Portfolio
                </Link>
                </li>
                
                <li className='mr-[20px] text-2xl hover:text-violet-200 cursor-pointer hover:scale-110 duration-500'>
                <Link to="contact" smooth={true} duration={1000}>
                Contact
                </Link>
                </li>
            </ul>



            {/* hamburger icon */}
            <div onClick={handleClick} className='md:hidden z-10 text-2xl cursor-pointer'>
                {!nav ?  <FaBars/> : <FaTimes />}
              
            </div>

             {/* mobile menu  */}
            <ul className={!nav ? 'hidden' : 'absolute left-0 top-0 w-full h-screen flex flex-col bg-slate-800 text-3xl  justify-center items-center'}>
                <li className='py-5 cursor-pointer hover:text-violet-200 hover:scale-110 duration-500'>
                    <Link to="home" smooth={true} duration={1000} onClick={handleClick} >
                    Home
                    </Link>
                </li>
                <li className='py-5 cursor-pointer hover:text-violet-200 hover:scale-110 duration-500'>
                    <Link to="about" smooth={true} duration={1000} onClick={handleClick}>
                    About
                    </Link>
                </li>
                <li className='py-5 cursor-pointer hover:text-violet-200 hover:scale-110 duration-500'>
                    <Link to="services" smooth={true} duration={1000} onClick={handleClick}>
                    Services
                    </Link>
                </li>
                <li className='py-5 cursor-pointer hover:text-violet-200 hover:scale-110 duration-500'>
                    <Link to="portfolio" smooth={true} duration={1000} onClick={handleClick}>
                    Porfolio
                    </Link>
                </li>
                
                <li className='py-5 cursor-pointer hover:text-violet-200 hover:scale-110 duration-500'>
                    <Link to="contact" smooth={true} duration={1000} onClick={handleClick}>
                    Contact
                    </Link>
                </li>                
            </ul>


        </div>

    </div>
  )
}
