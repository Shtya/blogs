import "./sass/main.css"
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, useLocation } from "react-router-dom";


import Img3 from "./assets/bg/1.webp"

const root = ReactDOM.createRoot(document.getElementById('root'));

const Loading = () => {
  const {pathname} = useLocation() ;
  const [time , settime] = useState(true)
  useEffect(_=>{
    const data = async()=>{
      await pathname ? settime(true) : settime(false)
      setTimeout(() => {
        settime(false)
      }, 3000);
    }

    data()
  } ,[pathname])
  return (
   time == true && <div className="animation_text" >
      </div>
  )
}


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Loading /> <App /> 
    </BrowserRouter>
  </React.StrictMode>
);

