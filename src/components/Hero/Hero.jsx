import React from 'react'
import Grocery from '../../assets/pictures/grocery.png'
import Button from '../Button/Button'

const Hero = () => {
  return (
   <section>
    <div className=' min-h-screen max-w-[1250px] mx-auto px-10 flex items-center pt-25 '>

        {/* Hero content  */}
        <div className='flex-1'>
            <span className='bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full'> Delivering the finest quality....</span>
            <h1 className='text-7xl/20 font-bold mt-4'>  
                Testy Organic <span  className='text-orange-500'> Fruits</span> & <span  className='text-orange-500'> Veggies</span><br/>In Your City
            </h1>
            <p className='text-zinc-600 text-lg max-w-[530px] mt-5 mb-10'> 
                Bred for a high content of beneficial substances. Our products are all fresh and healthy.
            </p>
                <Button  content ="Shop Now"/>
        </div>

        {/* Hero image */}
        <div className='flex-1'>
            <img src= {Grocery} alt='Hero Image'/>

        </div>
    </div>
   </section>
  )
}

export default Hero
