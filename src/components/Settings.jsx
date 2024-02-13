import React from 'react'

const Settings = () => {
	const handelSettings = ()=>{
		let set = document.querySelector(".configration")
    	set.classList.toggle("active")
	}
  return (
    <div className='configration'>
        <i className="fa-solid fa-xmark" onClick={handelSettings}></i>
        
    </div>
  )
}

export default Settings