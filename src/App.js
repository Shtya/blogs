import React, { useEffect, useState }  from 'react'
import {Routes , Route, useLocation} from "react-router-dom"

import Home from "./pages/Home.jsx"
import Footer from './components/Footer.jsx'
import Nav from "./components/Nav.jsx"
import CategoryPage from "./pages/CategoryPage.jsx"
import Category from './components/Category.jsx'
import Contactus from './components/Contactus.jsx'
import Settings from './components/Settings.jsx'
import BlogDetails from './pages/BlogDetails.jsx'
import UP from "./components/UP.jsx"
export const Social_Media = ["https://www.facebook.com/MRMadvertisingDubai" , "https://www.instagram.com/mrmadvertising/" , "https://www.linkedin.com/company/mrm-advertising-media" , "https://api.whatsapp.com/send?phone=+971561384496&text=Hello%2C%20world!"]


const App = () => {


  return ( 
    <div className='App'>
      <Nav />
      <UP />
      <div className='app'>
      <Category/>
      <Contactus />
      <Settings />

      <Routes  >
        <Route  path='/'    element={<Home />} />                                                 
        <Route  path='/blog/:id'    element={<BlogDetails />} />                                                 
        <Route  path='/category/:id'    element={<CategoryPage />} />                                                 
      </Routes>

      </div>
    </div>

  )
}

export default App




