import React from 'react'

import { BrowserRouter } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'

import RoutesApp from '../routers/RoutesApp'


const Layout = () => {
  return (
    <BrowserRouter>
      <div>
        <div className="container">
          <Header />
          <div className="main">
            <RoutesApp />
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout