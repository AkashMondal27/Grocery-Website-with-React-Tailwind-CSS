import React from 'react'
import Heading from '../Heading/Heading'
import { useState } from 'react'
import ProductList from '../ProdubuctList/ProductList'
import Cards from '../Cards/Cards'
import Button from '../Button/Button'

const Products = () => {

  const catagories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'SeaFood']

  const [activeTab, setActiveTab] = useState('All');

  let filteredItems=activeTab==="All"? 
  ProductList : ProductList.filter(item=>item.category==activeTab);

  const renderCards = filteredItems.slice(0, 8).map(product => {
    return (
      <Cards image={product.image}
        name={product.name}
        price={product.price}
      />
    )
  })

  return (
    <section>
      <div className='max-w-[1250px]  mx-auto px-10 p-20'>
        <Heading highlight="Our" heading="Products" />
        {/* Tabs */}
        <div className='flex gap-3 justify-center mt-5'>
          {catagories.map(catagory => {
            return (
              <button key={catagory} className={` px-5 py2 text-lg rounded-lg cursor-pointer
                 ${activeTab == catagory ? 'bg-gradient-to-b from-orange-300 to-orange-600  text-white' : 'bg-orange-100'}`}
                onClick={() => setActiveTab(catagory)}
              >
                {catagory}
              </button>
            )
          })}
        </div>

        {/* product listing  */}
        <div className='grid grid-cols-4 gap-9 mt-10'>
          {renderCards}
        </div>

        <div className='scale-70 mt-15 mx-auto w-fit'>
          <Button content="View All" />
        </div>
      </div>
    </section>
  )
}

export default Products


