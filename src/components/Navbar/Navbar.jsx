import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";


const Navbar = () => {
    return (
        <header className='bg-wh fixed top-0 right-0 left-0'>
            <nav className='max-w-[1250px] mx-auto px-10 h-[14vh] flex justify-between items-center   '>

                <a href='# ' className='text-3xl font-bold'>
                    Gr<span className='text-orange-500 '>O</span>cify
                </a>
                {/* navbar links */}
                <ul className='flex items-center gap-x-15'>
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
                    <div className='flex  p-1 border-2 border-orange-500 rounded-full '>
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
                </div>

            </nav>
        </header>
    )
}

export default Navbar
