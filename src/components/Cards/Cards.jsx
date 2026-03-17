import React from 'react'
import { FaHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import Button from '../Button/Button'

const Cards = ( {image,name,price} ) => {
    return (

        <div className='bg-zinc-100 p-3 rounded-xl'>
            {/* Card Icons */}
            <div className='flex justify-between'>
                <span className='text-3xl text-zinc-300'>
                    <FaHeart />
                </span> 
                <button  className=' bg-gradient-to-b from-orange-400 to-orange-500 text-white text-lg px-3 py-2 rounded-lg '>
                    <FaPlus />
                </button>
            </div>

            {/* Image */}
            <div className=' e-full h-30 '>
                <img src={image}  className='w-full h-full mx-auto object-contain'/>
            </div>

            {/* title $ price */}
            <div className='text-center'>
                <h3 className='text-2xl font-semibold'> {name}</h3>
                <p className='text-2xl font-bold mt-2 mb-2'>${price.toFixed(2)}</p>
                {/* <Button content="Shop Now"  /> */}
                    <div className='scale-70'>
                     <Button content="Shop Now" />
                    </div>
            </div>

        </div>


    )
}

export default Cards
