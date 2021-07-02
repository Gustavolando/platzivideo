import React from 'react'
import Header from '../routes/Header'
import Footer from '../routes/Footer'

const Layout = ({children}) => (
  <div className="App">
    {children}
    <Footer />
  </div>
)

export default Layout