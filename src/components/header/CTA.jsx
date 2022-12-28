import React from 'react'
import CV from '../../assets/Aarham_Haider_Resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's Have A Chat!</a>
    </div>
  )
}

export default CTA