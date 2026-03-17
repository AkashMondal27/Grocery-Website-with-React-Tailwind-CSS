import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import  BgFruits from '../../assets/pictures/fruits-banner.jpg'
const Fruits = () => {
  return (
    <div>
      <CategoryPage title="Fruits & Vegetables " 
      bgImage={BgFruits} 
      categories={["Fruits","Vegetables"]}/>
    </div>
  )
}

export default Fruits
