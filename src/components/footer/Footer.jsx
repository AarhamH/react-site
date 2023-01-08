import React from 'react'
import'./footer.css'
import LOGO from '../../assets/logo-black.png'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'><img src={LOGO} alt=""  className='logo'/></a>
      <ul className='permalinks'>
        <li> <a href="#">Home</a></li>
        <li> <a href="#about">About</a></li>
        <li> <a href="#experience">Skills and Competencies</a></li>
        <li> <a href="#portfolio">Projects</a></li>
        <li> <a href="#contact">Contacts</a></li>
      </ul>

      <div className="footer_copyright">
        <li><a href="https://github.com/AarhamH/personal-portfolio"><small>&copy; Designed & Built by Aarham Haider</small></a></li>
      </div>
    </footer>
  )
}

export default Footer