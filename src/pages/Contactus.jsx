import React from 'react'
import Nav2 from '../components/Nav2'

const ContactusPage = () => {
  return (
    <div className='ContactusPage'>
        <Nav2 />

        <div className="contact-box">
            <div className="container">
                <div className="left">
                    <div className="h1"> Contact us </div>
                    <div className="p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis animi quaerat est beatae in inventore reprehenderit? </div>

                    <ul>
                        <li> 
                            <div className="h2"> Lorem, ipsum dolor.</div>    
                            <div className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, enim.</div>
                        </li>
                        <li> 
                            <div className="h2"> Lorem, ipsum dolor.</div>    
                            <div className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, enim.</div>
                        </li>
                        <li> 
                            <div className="h2"> Lorem, ipsum dolor.</div>    
                            <div className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, enim.</div>
                        </li>
                    </ul>
                </div>

                <form action="">
                    <input type="text" placeholder='Your Name' />
                    <input type="email" placeholder='Your Email' />
                    <input type="phone" placeholder='Your Phone' />
                    <div className="option"> Optional </div>
                    <textarea placeholder='Your Message' ></textarea>
                    <div className="bt"> Send </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactusPage