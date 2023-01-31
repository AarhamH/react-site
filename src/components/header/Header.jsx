import React, { useEffect } from 'react'
import './header.css'
import CTA from './CTA'
import LOGO from '../../assets/logo-white.png'
import HeaderSocials from './HeaderSocials'
import Typist from 'react-typist'
import AOS from 'aos'
import "aos/dist/aos.css"


const Header = () => {
  useEffect(() => {
    AOS.init({duration: 1000});
  }, [])
  return (
    <header>
      <div className="container header_container">
        <h5><img data-aos= 'zoom-in' src={LOGO} alt="logo" /></h5>
        <div className='header_name'>
            <h5 data-aos= 'fade-down'>Hey I'm</h5>
            <Typist cursor={{blink: true, show: true, hideWhenDone: true}}>
              <Typist.Delay ms={1000}/>
              Aarham <span>Haider</span>
            </Typist>
        </div>
        <h5 data-aos= 'fade-up' className="text-light"> Student,  Amateur Game Dev</h5>
        <CTA />
        <HeaderSocials/>
        <a href="mailto:aah13@sfu.ca" className='scroll_down'>aarham.haider@gmail.com</a>

      </div>
    </header>
  )
}

export default Header