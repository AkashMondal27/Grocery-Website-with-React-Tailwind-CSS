import React, { useEffect, useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { TbMenu2 } from "react-icons/tb";
import { IoCloseSharp } from "react-icons/io5";
import { Link ,NavLink } from 'react-router-dom';


const Navbar = () => {


    // Write the menu click event Logic
    const [showMenu, setShowMenu] = useState(false);
    const [isScroll, setIsScroll] = useState(false);


    const toggleMenu = () => {
        setShowMenu(!showMenu);

    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 10)

        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])


    const closeMenu = () => {
        setShowMenu(false);
    }

    return (
        <header className={`bg-white fixed top-0 right-0 left-0 z-50 transition-all duration-300  ${isScroll ? 'drop-shadow-[0_8px_25px_rgba(249,115,22,0.15)]' : ""}`}>
            <nav className='max-w-[1250px] mx-auto px-10 md:h-[14vh] h-[12vh] flex justify-between items-center   '>

                <Link to='/' className=' text-xl md:text-3xl font-bold'>
                    {/* Logo */}
                    <span className='text-orange-500 '>G</span>rocy<span className='text-orange-500 '>N</span>est
                </Link>
                {/* navbar links/ Desktop menu */}
                <ul className='md:flex items-center gap-x-15 hidden'>
                    <li>
                        <NavLink to='/' className={({ isActive }) => isActive ? 'font-semibold  tracking-wider text-orange-500' : 'font-semibold tracking-wider text-zinc-800  hover:text-orange-500'}> Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/category' className={({ isActive }) => isActive ? 'font-semibold  tracking-wider text-orange-500' : 'font-semibold tracking-wider text-zinc-800  hover:text-orange-500'}> Catagory</NavLink>
                    </li>
                    <li>
                        <NavLink to='/discount' className={({ isActive }) => isActive ? 'font-semibold  tracking-wider text-orange-500' : 'font-semibold tracking-wider text-zinc-800  hover:text-orange-500'}> Discount</NavLink>
                    </li>
                    <li>
                        <NavLink to='/reviews' className={({ isActive }) => isActive ? 'font-semibold  tracking-wider text-orange-500' : 'font-semibold tracking-wider text-zinc-800  hover:text-orange-500'}> Reviews</NavLink>
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

                    <Link to='#' className='text-zinc-800 text-2xl'>
                        <FaRegHeart />
                    </Link>

                    <Link to='#' className='text-zinc-800 text-2xl'>
                        <RiShoppingBag4Fill />
                    </Link>

                    {/* hambargar */}
                    <Link to='#' className='text-zinc-800 text-3xl md:hidden  ' onClick={toggleMenu}>
                        {showMenu ? <IoCloseSharp /> : <TbMenu2 />}
                    </Link>

                </div>

                {/* Mobile Menu */}
                <ul className={`flex flex-col gap-y-10 bg-orange-500/30 backdrop-blur-xl shadow-2xl rounded-xl p-10 items-center gap-x-15 md:hidden absolute top-30 -right-full transform translate-x-1/2  transition-all duration-500 ${showMenu ? 'right-1/2' : ""}`}>
                    <li>
                        <NavLink to='/' onClick={closeMenu} className={({ isActive }) => isActive ? 'font-semibold  tracking-wider text-orange-500' : 'font-semibold tracking-wider text-zinc-800  hover:text-orange-500'}> Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/category' onClick={closeMenu} className={({ isActive }) => isActive ? 'font-semibold  tracking-wider text-orange-500' : 'font-semibold tracking-wider text-zinc-800  hover:text-orange-500'}> Category</NavLink>
                    </li>
                    <li>
                        <NavLink to='/discount' onClick={closeMenu} className={({ isActive }) => isActive ? 'font-semibold  tracking-wider text-orange-500' : 'font-semibold tracking-wider text-zinc-800  hover:text-orange-500'}> Discount</NavLink>
                    </li>
                    <li>
                        <NavLink to='/reviews' onClick={closeMenu} className={({ isActive }) => isActive ? 'font-semibold  tracking-wider text-orange-500' : 'font-semibold tracking-wider text-zinc-800  hover:text-orange-500'}> Reviews</NavLink>
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
