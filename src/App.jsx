import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Electronics from './pages/Electronics/Electronics'
import Furniture from './pages/Furniture/Furniture'
import Sofa from './pages/Furniture/products/Sofa'
import Details from './pages/Furniture/products/Details'
import Product from './pages/Electronics/products/Product'
import Detailselec from './pages/Electronics/products/Detailselec'
import About from './components/About'

function App() {
  const [use, setuse] = useState("")

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      )
    },
    {
      path: "/electronics",
      element: (
        <>
          <Navbar />
          <Electronics />
        </>
      )
    },
    {
      path: "/electronics/:type",
      element: (
        <>
          <Navbar />
          <Product />

        </>
      )
    },
    {
      path: "/furniture",
      element: (
        <>
          <Navbar />
          <Furniture />
        </>
      )
    },
    {
      path: "/furniture/:type",
      element: (
        <>
          <Navbar />
          <Sofa />

        </>
      )
    },
    {
      path: "/electronics/:type/:id",
      element: (
        <>
          <Navbar />
          <Detailselec />

        </>
      )
    },
    {
      path: "/furniture/:type/:id",
      element: (
        <>
          <Navbar />
          <Details />

        </>
      )
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About />

        </>
      )
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;