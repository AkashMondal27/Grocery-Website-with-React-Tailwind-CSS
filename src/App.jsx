import React from 'react'
import Home from './components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Fruits from './components/Fruits/Fruits'
import Dairy from './components/Dairy/Dairy'
import SeaFood from './components/SeaFood/SeaFood'
import ViewAll from './components/ViewAll/ViewAll'



function App() {

  const router = createBrowserRouter([
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
      }
  ])

  return <RouterProvider router={router} />
}

export default App
