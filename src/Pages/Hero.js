import React from 'react'
import man from "../assets/man.png";


function Hero() {
    return (
        <>
                 <div className='hero flex items_center justify_between'>
                             <div className='left flex-1'>
                                   <img src={man} alt='error'/>
                             </div>
                             <div className='right flex-2'>
                                   <h6>Animesh Awasthi</h6>
                                   <h1>I'm a Passionate <br/> <span>Web Developer</span></h1>
                                   <p>A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language,</p>
                                   <div>
                                         <button className='btns btns_secondary'>Download CV</button>
                                   </div>
                                   
                             </div>
                  </div>
        </>
    )
}

export default Hero
