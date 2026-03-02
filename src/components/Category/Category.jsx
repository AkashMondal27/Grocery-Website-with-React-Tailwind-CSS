import React from 'react'
import Heading from '../Heading/Heading'
import Button from '../Button/Button'
import FruitsVeggies from '../../assets/pictures/fruits-and-veggies.png'
import DairyEggs from '../../assets/pictures/dairy-and-eggs.png'
import MeatSeaFood from '../../assets/pictures/meat-and-seaFood.png'

const Category = () => {


  const renderCard = category.map((card=>{
    return(
      <div className='flex-1 '>

        <div className=' w-full min-h-[30vh] relative  -mb-10'>
          <img src= {card.image} className='absolute bottom-0' />
        </div>


        <div className='bg-red-100 pt-17 p-8 rounded-xl'>
          <h3 className='text-zinc-800 text-3xl font-bold'>{card.title}</h3>
          <p className='text-zinc-600 mt-3 mb-9'> {card.description}</p>
          <Button content= "See All" />
        </div>
      </div>
    )
  }))
 
  return (
    <section>
      <div className='py-20 max-w-[1250px] mx-auto px-10'>
        <Heading highlight=" Product" heading=" Catagory" />

         
        <div className='flex gap-10 mt-15'>
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
    image: FruitsVeggies
  },

  {
    id: 2,
    title: "Dairy & Eggs",
    description: "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
    image: DairyEggs
  },

  {
    id: 3,
    title: "Meat & SeaFood",
    description: "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
    image: MeatSeaFood
  }


]
