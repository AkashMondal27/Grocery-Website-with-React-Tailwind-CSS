import React from 'react'
import Banner from '../Banner/Banner'
import ProductList from '../ProdubuctList/ProductList'
import Cards from '../Cards/Cards'

const CategoryPage = ({ title, bgImage, categories }) => {

  let filteredProducts =
    categories.includes("All")
      ? ProductList
      : ProductList.filter((product) =>
          categories.includes(product.category)
        )

  const renderProducts = filteredProducts.map((product) => {
    return (
      <Cards
        key={product.id}
        image={product.image}
        name={product.name}
        price={product.price}
      />
    )
  })

  return (
    <div>
      <Banner title={title} bgImage={bgImage} />

      <div className='grid md:grid-cols-4 grid-cols-1 gap-9 py-20 max-w-[1250px] mx-auto px-10'>
        {renderProducts}
      </div>
    </div>
  )
}

export default CategoryPage