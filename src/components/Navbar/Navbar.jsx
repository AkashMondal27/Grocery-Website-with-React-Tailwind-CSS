import React, { useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { TbMenu2 } from "react-icons/tb";
import { IoCloseSharp } from "react-icons/io5";


const Navbar = () => {


    // Write the menu click event Logic
    const[showMenu, setShowMenu]=useState(false);

    const  toggleMenu =() =>{
        setShowMenu(!showMenu);
    }
    return (
        <header className='bg-wh fixed top-0 right-0 left-0'>
            <nav className='max-w-[1250px] mx-auto px-10 md:h-[14vh] h-[12vh] flex justify-between items-center   '>

                <a href='# ' className='text-3xl font-bold'>
                    {/* Logo */}
                    Gr<span className='text-orange-500 '>O</span>cify
                </a>
                {/* navbar links/ Desktop menu */}
                <ul className='md:flex items-center gap-x-15 hidden'>
                    <li>
                        <a href='#' className='font-semibold  tracking-wider text-orange-500'> Home</a>
                    </li>
                    <li>
                        <a href='#' className='font-semibold tracking-wider text-zinc-800  hover:text-orange-500 ' > About </a>
                    </li>
                    <li>
                        <a href='#' className='font-semibold tracking-wider text-zinc-800  hover:text-orange-500 '> Process</a>
                    </li>
                    <li>
                        <a href='#' className='font-semibold tracking-wider text-orange-500  text-zinc-800  hover:text-orange-500'> Contact</a>
                    </li>
                </ul>

                {/* Nav search bar */}
                <div className='flex items-center gap-x-5'>

                    {/* input field */}
                    <div className=' md:flex  p-1 border-2 border-orange-500 rounded-full  hidden'>
                        <input type='text' name='text' id=' text' placeholder=' Search..' autoComplete=' off' className=' flex-1 h-[5vh]  px-3  focus:outline-none' />

                        <button className="bg-gradient-to-br from-orange-400 to-orange-600 
                                            text-white w-10 h-10 flex justify-center items-center 
                                            rounded-full text-xl shadow-md hover:shadow-lg 
                                            hover:scale-105 transition duration-300 cursor-pointer">
                            <IoSearch />
                        </button>
                    </div>

                    <a href='# ' className='text-zinc-800 text-2xl'>
                        <FaRegHeart />
                    </a>

                    <a href='# ' className='text-zinc-800 text-2xl'>
                        <RiShoppingBag4Fill />
                    </a>

                    {/* hambargar */}
                    <a href='#' className='text-zinc-800 text-3xl md:hidden  ' onClick={toggleMenu}> 
                         {showMenu ? <IoCloseSharp /> :<TbMenu2 />  } 
                    </a>

                </div>

                {/* Mobile Menu */}
                <ul className= {`flex flex-col gap-y-10 bg-orange-500/30 backdrop-blur-xl rounded-xl p-10 items-center gap-x-15 md:hidden absolute top-30 -right-full transform translate-x-1/2  transition-all duration-500 ${showMenu ? 'right-1/2' :"" }`}>
                    <li>
                        <a href='#' className='font-semibold  tracking-wider text-orange-500'> Home</a>
                    </li>
                    <li>
                        <a href='#' className='font-semibold tracking-wider text-zinc-800  hover:text-orange-500 ' > About </a>
                    </li>
                    <li>
                        <a href='#' className='font-semibold tracking-wider text-zinc-800  hover:text-orange-500 '> Process</a>
                    </li>
                    <li>
                        <a href='#' className='font-semibold tracking-wider text-orange-500  text-zinc-800  hover:text-orange-500'> Contact</a>
                    </li>

                     <li className=' flex  p-1 border-2 border-orange-500 rounded-full  md:hidden'>
                        <input type='text' name='text' id=' text' placeholder=' Search..' autoComplete=' off' className=' flex-1 h-[5vh]  px-3  focus:outline-none' />

                        <button className="bg-gradient-to-br from-orange-400 to-orange-600 
                                            text-white w-10 h-10 flex justify-center items-center 
                                            rounded-full text-xl shadow-md hover:shadow-lg 
                                            hover:scale-105 transition duration-300 cursor-pointer">
                            <IoSearch />
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
