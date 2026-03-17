import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import  BgSeaFood from '../../assets/pictures/seafood-banner.jpg'

const SeaFood = () => {
  return (
    <div>
     <CategoryPage 
     title=" Meat & Sea Food" 
     bgImage={BgSeaFood}
     categories={["SeaFood" ,"Meat"]} />
    </div>
  )
}

export default SeaFood
