import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import  BgViewAll from '../../assets/pictures/all-banner.jpg'

const ViewAll = () => {
  return (
    <div>
      <CategoryPage  title="All Products" bgImage={BgViewAll}/>
    </div>
  )
}

export default ViewAll
