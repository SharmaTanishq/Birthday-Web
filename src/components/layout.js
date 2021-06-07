
import * as React from "react"
import Footer from "./Footer"


import Header from "./header"
import "./layout.css"
import Navbar from "./Navbar"

const Layout = ({ children }) => {


  return (
    <>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
      
     
    </>
  )
}



export default Layout
