import { Instagram } from '@material-ui/icons';
import React from 'react'
import man2 from "../assets/man-2.png";
import website from "../assets/website.svg"
import facebook from "../assets/facebook.svg"
import twitter from "../assets/twitter.svg"
import pintrest from "../assets/pintrest.svg"
import instagram from "../assets/instagram.svg"

function About() {
    return (
        <>
              <section className='about'>
                         <div className='container flex items_center'>

                                  <div className='left flex-1'>
                                          <img src={man2} alt='error' className='about_me_img'/>
                                  </div>

                                  <div className='right flex-2'>
                                             <h1>About <span>Me</span></h1>
                                             <h3>Hello I'm Animesh Awasthi</h3>
                                             <p>A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language,</p>
                                             <div className='social'>
                                                    <a href='#'><i className='fab fa-facebook-f'></i></a>
                                                    <a href='#'><i className='fab fa-twitter'></i></a>
                                                    <a href='#'><i className='fab fa-instagram'></i></a>
                                                    <a href='#'><i className='fab fa-linkedin-in'></i></a>
                                                    <a href='#'><i className='fab fa-pinterest-square'></i></a>
                                             </div>
                                  </div>

                         </div>
               </section> 
        </>
    )
}

export default About
