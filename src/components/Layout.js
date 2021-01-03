import React from "react"

//components
import Navbar from "./Navbar"
import Footer from "./Footer"

//css
import "./Layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
