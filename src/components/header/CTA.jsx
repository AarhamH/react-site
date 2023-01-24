import React, {useEffect} from 'react'
import CV from '../../assets/Aarham_Haider_Resume.pdf'
import AOS from 'aos'
import "aos/dist/aos.css"

const CTA = () => {
  useEffect(() => {
    AOS.init({duration: 4000});
  }, [])
  return (
    <div  className='cta'>
      <div data-aos = 'fade-right'>
          <a href={CV} download className='btn'>Download Resume</a>
      </div>
      <div data-aos = 'fade-left'>
         <a href="#contact" className='btn btn-primary'>Let's Have A Chat!</a>
      </div>
    </div>
  )
}

export default CTA