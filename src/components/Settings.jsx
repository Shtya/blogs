import React, { useEffect } from 'react'

const Settings = () => {
	const handelSettings = ()=>{
		let set = document.querySelector(".configration")
    	set.classList.toggle("active")
	}
  useEffect(_=>{
    
    const Grid = document.querySelectorAll('.grid div');
    let blogboxes = document.querySelector(".boxes-blogs")
    let BODY = document.querySelector("body")
    Grid.forEach(item => {
    item.addEventListener('click', function() {
      Grid.forEach(li => { li.classList.remove('ac'); });
      item.classList.add('ac');
      if(item.classList.contains("one")) blogboxes.classList.add("list")
      if(item.classList.contains("two")) blogboxes.classList.remove("list")
      }) });
    
    const Mode = document.querySelectorAll('.mode1 div');
    Mode.forEach(item => {
    item.addEventListener('click', function() {
      Mode.forEach(li => { li.classList.remove('ac'); });
      item.classList.add('ac');
      if(item.classList.contains("dark")){ BODY.classList.add("dark-mode")        }
      if(item.classList.contains("light")){BODY.classList.remove("dark-mode") }
      }) });
    
    const Translate = document.querySelectorAll('.trans div');
    Translate.forEach(item => {
    item.addEventListener('click', function() {
      Translate.forEach(li => { li.classList.remove('ac'); });
      item.classList.add('ac');
      }) });

  } ,[])
  return (
    <div className='configration'>
        <i className="fa-solid fa-xmark" onClick={handelSettings}></i>

        <div className="mode grid">
          <div className="one "> <i class="fa-solid fa-grip-lines"></i> </div>
          <div className="two ac"> <i class="fa-solid fa-table-cells-large"></i> </div>
        </div>

        <div className="mode mode1">
          <div className="light ac"> Light </div>
          <div className="dark"> Dark </div>
        </div>

        <div className="mode trans">
            <div className="ar ac">Arabic</div>
            <div className="en"> English </div>
        </div>
    </div>
  )
}

export default Settings