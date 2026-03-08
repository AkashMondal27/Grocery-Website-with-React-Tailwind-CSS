import React from 'react'
import Heading from '../Heading/Heading'
import { useState } from 'react'
import ProductList from '../ProdubuctList/ProductList'

const Products = () => {

  const catagories = ['All', 'Fruits', 'Vagetables', 'Dairy', 'SeaFood']

  const  [activeTab ,setActiveTab]= useState('All');

  return (
    <section>
      <div className='max-w-[1250px]  mx-auto px-10 p-20'>
        <Heading highlight="Our" heading="Products" />
        {/* Tabs */}
        <div className='flex gap-3 justify-center mt-10'>
          {catagories.map(catagory => {
            return (
              <button key={catagory} className={` px-5 py2 text-lg rounded-lg cursor-pointer
                 ${activeTab==catagory ? 'bg-gradient-to-b from-orange-300 to-orange-600  text-white':'bg-orange-100' }`}
                 onClick={()=>setActiveTab(catagory)}
                 >
                {catagory}
              </button>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Products


