import React from 'react'
import Heading from '../Heading/Heading'
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import Basket from "../../assets/pictures/basket-full-vegetables.png"

const Values = () => {


  const leftValues = value.slice(0, 2).map(item => {
    return (
      <div className=' flex flex-row-reverse '>
        <div>
          <span className="flex justify-center items-center
                 text-3xl text-white
                 w-14 h-14 rounded-full
                 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700
                 shadow-lg shadow-orange-500/40
                 hover:scale-110 hover:shadow-orange-600/60
                 transition-all duration-300">
          {/* <span className= ' flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full'> */}
            {item.icon}
          </span>
        </div>

        <div className='text-right'>

          <h4 className=' text-zinc-800 text-3xl font-bold' >
            {item.title}
          </h4>

          <p className='text-zinc-600'> 
            {item.para}
            </p>
        </div>
      </div>
    )
  })


  const rightValues = value.slice(2).map(item => {
    return (
      <div className=' flex flex-row-reverse '>
        <div>
          <span className="flex justify-center items-center
                 text-3xl text-white
                 w-14 h-14 rounded-full
                 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700
                 shadow-lg shadow-orange-500/40
                 hover:scale-110 hover:shadow-orange-600/60
                 transition-all duration-300">
          {/* <span className= ' flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full'> */}
            {item.icon}
          </span>
        </div>

        <div className='text-right'>

          <h4 className=' text-zinc-800 text-3xl font-bold' >
            {item.title}
          </h4>

          <p className='text-zinc-600'> 
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

        <div className=' flex'>

          {/* left values  */}
          <div  >
            {leftValues}
          </div>

          <div className='w-1/2'>
            <img src={Basket} />
          </div>

          {/* Right values */}
          <div>
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
    para: "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaHeart />
  },

  {
    id: 2,
    title: "Always Fresh",
    para: "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaLeaf />
  },

  {
    id: 3,
    title: "Food Safety",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: <FaShieldAlt />
  },

  {
    id: 4,
    title: "100% Organic",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: <FaSeedling />
  }
]