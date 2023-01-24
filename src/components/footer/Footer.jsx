import React, {useEffect} from 'react'
import'./footer.css'
import LOGO from '../../assets/logo-black.png'
import AOS from 'aos'
import "aos/dist/aos.css"

const Footer = () => {
  useEffect(() => {
    AOS.init({duration: 500});
  }, [])

  return (
    <footer>
      <a data-aos='fade' href="#" className='footer_logo'><img src={LOGO} alt=""  className='logo'/></a>
      <ul data-aos='fade-up' className='permalinks'>
        <li> <a href="#">Home</a></li>
        <li> <a href="#about">About</a></li>
        <li> <a href="#experience">Skills and Competencies</a></li>
        <li> <a href="#portfolio">Projects</a></li>
        <li> <a href="#contact">Contacts</a></li>
      </ul>

      <div  data-aos='fade-up' className="footer_copyright">
        <li><a href="https://github.com/AarhamH/personal-portfolio"><small>&copy; Designed & Built by Aarham Haider</small></a></li>
      </div>
    </footer>
  )
}

export default Footer