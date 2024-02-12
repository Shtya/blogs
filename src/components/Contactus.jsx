import React from 'react'

const Contactus = () => {

    const handelContact = ()=>{
        let contact = document.querySelector(".contact-us")
        contact.classList.toggle("show")
    }
  return (
    <div className='contact-us'>
         <div className="container">
            <form action="">
                <i onClick={handelContact} className="fa-solid fa-xmark"></i>
                <div className="h1"> Contact Us </div>
                <input type="text" placeholder='Your Name' />
                <input type="email" placeholder='Your Email' />
                <textarea name=""  placeholder='Message' ></textarea>
                <div className="bt">send  </div>
            </form>
         </div>
    </div>
  )
}

export default Contactus