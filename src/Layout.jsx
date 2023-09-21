import React from 'react'
import Footer from './Component/Footer/Footer'
import Header from './Component/Header/Header'
import Home from './Component/Home/Home'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout
