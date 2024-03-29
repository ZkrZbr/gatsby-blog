import React from "react"
import Footer from "./footer"
import Header from "./header"
import layoutStyles from "./layout.module.css"

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout