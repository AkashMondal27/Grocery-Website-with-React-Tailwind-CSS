import React from 'react'
import Button from '../Button/Button'
import FreshFruits from '../../assets/pictures/fresh-fruits.png'

const Discount = () => {
  return (
    <section className='bg-zinc-100  bg-no-repeat bg-right  bg-contain' style={{backgroundImage: `url(${FreshFruits})`}}>
        <div className=' md:bd-transparent  flex md:flex-row flex-col max-w-[1250px] mx-auto px-10 py-10'>
            <span className='md:text-9xl text-6xl text-5xl text-orange-500 font-bold transform md:-rotate-90  h-fit md:self-center '> 20%</span>
            <div className='max-w-[700px]'>
                <h3 className='text-4xl md:text-7xl text-red-800 font-bold '> First order Discount</h3>
                <p className=' md:text-zinc-600 text-zinc-800 my-6 font-bold'> Enjoy an exclusive first order discount on our grocery website! Shop fresh essentials and save big on your first purchase.  Fast delivery and quality guaranteed.
                </p>
                <Button content="Get a Discount "/>
            </div>
        </div>
    </section>
  )
}

export default Discount
