import React from 'react'

import { Routes ,Route } from 'react-router-dom'

import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Catalog from '../pages/Catalog'
import Product from '../pages/Product'

const Router = () => {
  return (
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/catalog' element={<Catalog />} />
      <Route path='/catalog/:slug' element={<Product />} />
    </Routes>
  )
}

export default Router