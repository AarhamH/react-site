import React from 'react'
import'./footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>AARHAM</a>
      <ul className='permalinks'>
        <li> <a href="#">Home</a></li>
        <li> <a href="#about">About</a></li>
        <li> <a href="#experience">Skills and Competencies</a></li>
        <li> <a href="#portfolio">Projects</a></li>
        <li> <a href="#contact">Contacts</a></li>
      </ul>

      <div className="footer_copyright">
        <small>&copy; Designed & Built by Aarham Haider</small>
      </div>
    </footer>
  )
}

export default Footer