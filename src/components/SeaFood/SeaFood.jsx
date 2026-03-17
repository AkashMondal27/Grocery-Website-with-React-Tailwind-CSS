import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import  BgSeaFood from '../../assets/pictures/seafood-banner.jpg'

const SeaFood = () => {
  return (
    <div>
     <CategoryPage title=" Meat & Sea Food" bgImage={BgSeaFood}/>
    </div>
  )
}

export default SeaFood
