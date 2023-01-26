import React, {useEffect} from 'react'
import './about.css'
import ME from '../../assets/profile.png'
import {MdSchool} from 'react-icons/md'
import {FaAward} from 'react-icons/fa'
import {MdGamepad} from 'react-icons/md'
import AOS from 'aos'
import "aos/dist/aos.css"


const About = () => {
  useEffect(() => {
    AOS.init({duration: 1500});
  }, [])

  return (
    <section data-aos='fade-up' id='about'>
      <h5>Get To Know More</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <MdSchool className='about_icon'/>
              <h5>Education</h5>
              <small>SFU BSc of Science in Computer Science (current)</small>
            </article>

            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>800+ hrs working,<br></br>1400+ hrs volunteer</small>
            </article>

            <article className='about_card'>
              <MdGamepad className='about_icon'/>
              <h5>Game Development</h5>
              <small>1 complete <br></br> 1 in-development</small>
            </article>
          </div>
          <p>My name is Aarham Haider and I am interested in creating various things. I am currently a Computer Science student 
            at Simon Fraser University, where I was able to study and develop expertise in various CS skills and conventions. I am
            also an aspiring video game developer and I have started production on two larger scale game projects during the summer of 2021.
            Recently, I gained interest in web development, particularly front-end, which has drove me to build the website before your eyes!
            If you would like to contact me, shoot me an email or contact me through the means listed below!
          </p>
          <a href="#contact" className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About