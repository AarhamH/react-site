import React, {useEffect} from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaItchIo} from 'react-icons/fa'

const HeaderSocials = () => {

  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/aarham-haider-5a0a4a1bb" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/AarhamH" target="_blank"><FaGithub/></a>
        <a href="https://aarhamh.itch.io/" target="_blank"><FaItchIo/></a>
    </div>
  )
}

export default HeaderSocials