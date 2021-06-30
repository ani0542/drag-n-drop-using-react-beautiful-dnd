import React from 'react'
import logo from "../assets/logo.svg";
import Hero from "./Hero"

function Navbar() {
    return (
        <>
               <header>
                   <div className='container'>
                       
                      <nav className='flex items_center justify_between'>

                             <div className='left flex items_center'>
                                    <div className='branding'>
                                                <img src={logo} alt='error'/>
                                    </div>

                                    <div className='branding'>
                                                <a href='#'>Home</a>
                                                <a href='#'>About</a>
                                                <a href='#'>Services</a>
                                                <a href='#'>Pages</a>
                                                <a href='#'>Blog</a>
                                    </div>
                             </div>

                             <div className='right'>
                                     <button className='btns btns-primary'>Contact</button>
                             </div>
                      </nav>
                      

                          <Hero/>
                    </div>
               </header>
        </>
    )
}

export default Navbar
