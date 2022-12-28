import React from 'react'
import './about.css'
import ME from '../../assets/profile.jpg'
import {FaAward} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Education</h5>
              <small>SFU BSc of Science in Computer Science (current)</small>
            </article>

            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>800+ hrs working,<br></br>1400+ hrs volunteer</small>
            </article>

            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Game Development</h5>
              <small>1 complete <br></br> 1 in-development</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid molestiae neque nisi facere aliquam, 
            atque molestias, aspernatur temporibus facilis amet repellat consequuntur itaque deleniti illo, repellendus 
            voluptate cumque veniam iure?</p>
          <a href="#contact" className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About