import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import Typist from 'react-typist'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5> Hey I'm</h5>
        <div className='header_name'>
            <Typist cursor={{blink: true, show: true, hideWhenDone: true}}>
              <Typist.Delay ms={1000}/>
              Aarham <span>Haider</span>
            </Typist>

        </div>
        <h5 className="text-light"> Developer</h5>
        <CTA />
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header