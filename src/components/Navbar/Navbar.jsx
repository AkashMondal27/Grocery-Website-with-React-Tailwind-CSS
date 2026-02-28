import React from 'react'

const Navbar = () => {
  return (
    <header className='bg-wh'>
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
        </nav>
    </header>
  )
}

export default Navbar
