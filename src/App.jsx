import React from 'react'
import Home from './components/Home/Home'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Fruits from './components/Fruits/Fruits'
import Dairy from './components/Dairy/Dairy'
import SeaFood from './components/SeaFood/SeaFood'
import ViewAll from './components/ViewAll/ViewAll'
import LayOut from './components/LayOut/LayOut'
import Category from './components/Category/Category'
import Discount from './components/Discount/Discount'
import Testimonials from './components/Testimonials/Testimonials'


import { createHashRouter, RouterProvider } from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/fruits",
          element: <Fruits />
        },
        {
          path: "/dairy",
          element: <Dairy />
        },
        {
          path: "/seafood",
          element: <SeaFood />
        },
        {
          path: "/viewall",
          element: <ViewAll />
        },
        {
          path:"/category",
          element :<Category />
        },
        {
          path:"/discount",
          element :<Discount />
        },
        {
          path:"/reviews",
          element :<Testimonials />

        }

      ]
    },

  ])

  return <RouterProvider router={router} />
}

export default App
