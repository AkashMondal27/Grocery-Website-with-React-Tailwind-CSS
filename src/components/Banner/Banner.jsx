import React from 'react'

const Banner = ({ title, bgImage }) => {
  return (
    <div 
      className='  h-[50vh] mt-25 flex  justify-center items-center  bg-cover bg-center relative' 
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <h2 className='text-5xl font-bold text-white backdrop-blur-md bg-white/20  px-8 py-4 rounded-xl border border-white/30  shadow-lg z-10'> {title} </h2>
      <div className=' bg-black/50 absolute inset-0'></div>
    </div>
  )
}

export default Banner

