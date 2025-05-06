import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'

import Footer from './components/Footer/footer'
function Layout() {
  return (
   <>
   <Header/>
   <Outlet/>{/*  this is dynamic */}
   <Footer/>
   </>
  )
}

export default Layout