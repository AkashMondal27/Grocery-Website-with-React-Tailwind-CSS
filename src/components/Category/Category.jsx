import React from 'react'
import Heading from '../Heading/Heading'
import FruitsVeggies from '../../assets/pictures/fruits-and-veggies.png'
import DairyEggs from '../../assets/pictures/dairy-and-eggs.png'
import MeatSeaFood from '../../assets/pictures/meat-and-seaFood.png'
import { Link } from 'react-router-dom'


const Category = () => {


  const renderCard = category.map((card => {
    return (

      <div className='w-full' key={card.id}>

        <div className=' w-full min-h-[30vh] relative  -mb-10'>
          <img src={card.image} className='absolute bottom-0' />
        </div>


        <div className='bg-red-100 pt-10 p-5 rounded-xl'>
          <h3 className='text-zinc-800 text-2xl font-bold'>{card.title}</h3>
          <p className='text-zinc-600 mt-2 mb-4'> {card.description}</p>
          <Link to={card.path} className='bg-gradient-to-b from-orange-400 to-orange-500 text-white
                   text-md  px-8 py-3 rounded-lg hover:scale-105
                  hover:to-orange-600 transition-all duration-300 cursor-pointer'>
            Explore Now
          </Link>
        </div>
      </div>
    )
  }))

  return (
    <section>
      <div className='py-20 max-w-[1250px] mx-auto px-10 mt-[5vh]'>
        <Heading highlight=" Product" heading=" Catagory" />



        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
          {renderCard}
        </div>
      </div>
    </section>
  )
}

export default Category

//create Card 

const category = [
  {
    id: 1,
    title: "Fruits & Veggies",
    description: "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
    image: FruitsVeggies,
    path: "/fruits"
  },

  {
    id: 2,
    title: "Dairy & Eggs",
    description: "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
    image: DairyEggs,
    path: "/dairy"
  },

  {
    id: 3,
    title: "Meat & SeaFood",
    description: "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
    image: MeatSeaFood,
    path: "/seafood"
  }


]
