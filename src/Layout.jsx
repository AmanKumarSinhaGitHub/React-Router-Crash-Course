import React from 'react'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'

// Layout component serves as the overall structure for the app,
// including a header, content area (Outlet for dynamic content), and footer.
function Layout() {
  return (
    <>
      {/* Header component contains navigation links */}
      <Header/>
      
      {/* Outlet serves as a placeholder for dynamic content based on routes */}
      <Outlet/>
   
      {/* Footer component displays information and navigation links */}
      <Footer/>
    </>
  )
}

export default Layout
