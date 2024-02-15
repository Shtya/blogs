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
import About_us from './pages/About-us.jsx'
import Error from './pages/Error.jsx'
import ContactusPage from './pages/Contactus.jsx'
export const Social_Media = ["https://www.facebook.com/MRMadvertisingDubai" , "https://www.instagram.com/mrmadvertising/" , "https://www.linkedin.com/company/mrm-advertising-media" , "https://api.whatsapp.com/send?phone=+971561384496&text=Hello%2C%20world!"]


const App = () => {

  const {pathname} = useLocation()
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior:"instant"} )
  }, [pathname])


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
        <Route  path='/about-us'    element={<About_us />} />                                                 
        <Route  path='/contact-us'    element={<ContactusPage />} />                                                 
        <Route  path='*'    element={<Error />} />                                                 
      </Routes>

      <Footer bg={true} />

      </div>
    </div>

  )
}

export default App




