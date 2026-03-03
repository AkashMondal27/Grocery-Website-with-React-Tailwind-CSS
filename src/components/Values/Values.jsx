import React from 'react'
import Heading from '../Heading/Heading'
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import Basket from "../../assets/pictures/basket-full-vegetables.png"

const Values = () => {


  const leftValues = value.slice(0, 2).map(item => {
    return (
      <div className=' group flex md:flex-row-reverse  items-center gap-7 cursor-pointer'>
        <div>
          <span className="flex justify-center items-center
                 text-3xl text-white
                 w-14 h-14 rounded-full
                 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700
                 shadow-lg shadow-orange-500/40
                 hover:scale-110 hover:shadow-orange-600/60
                 transition-all duration-300">
            {item.icon}
          </span>
        </div>

        <div className='md:text-right'>

          <h4 className=' text-zinc-800 text-3xl font-bold transition-all duration-300 group-hover:text-orange-600' >
            {item.title}
          </h4>

          <p className='text-zinc-600 mt-2 transition-all duration-300 group-hover:text-orange-500'> 
            {item.para}
            </p>
        </div>
      </div>
    )
  })


  const rightValues = value.slice(2).map(item => {
    return (
      
      <div className='group flex  items-center gap-7 cursor-pointer'>
        <div>
          <span className="flex justify-center items-center
                 text-3xl text-white
                 w-14 h-14 rounded-full
                 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700
                 shadow-lg shadow-orange-500/40
                 hover:scale-110 hover:shadow-orange-600/60
                 transition-all duration-300">
            {item.icon}
          </span>
        </div>

        <div >
          <h4 className='text-zinc-800 text-3xl font-bold transition-all duration-300 group-hover:text-orange-600'>
            {item.title}
          </h4>

          <p className='text-zinc-600 mt-2 transition-all duration-300 group-hover:text-orange-500'>
            {item.para}
            </p>
        </div>
      </div>
    )
  })

  
  return (
    <section>
      <div className=' max-w-[1250px] mx-auto px-10 py-20'>
        <Heading highlight="Our" heading="Values" />

        <div className=' flex md:gap-5 gap-15 md:flex-row flex-col '>

          {/* left values  */}
          <div className='md:min-h-100 gap-15 flex flex-col  justify-between '>
            {leftValues}
          </div>

          <div className='md:flex w-1/2 hidden'>
            <img src={Basket} />
          </div>

          {/* Right values */}
          <div className='md:min-h-100  gap-15 flex flex-col justify-between'>
            {rightValues}
          </div>
        </div >
      </div>
    </section>

  )
}

export default Values


const value = [
  {
    id: 1,
    title: "Trust",
    para: "Your trust matters to us. That’s why we ensure every product meets the highest standards of quality and reliability.",
    icon: <FaHeart />
  },

  {
    id: 2,
    title: "Always Fresh",
    para: "Enjoy farm-fresh produce delivered daily, carefully selected to guarantee taste, nutrition, and freshness.",
    icon: <FaLeaf />
  },

  {
    id: 3,
    title: "Food Safety",
    para: "From sourcing to packaging, we maintain rigorous food safety practices to protect your health and well-being.",
    icon: <FaShieldAlt />
  },

  {
    id: 4,
    title: "100% Organic",
    para: "We are committed to offering certified organic options that support a healthier lifestyle and a sustainable future.",
    icon: <FaSeedling />
  }
]