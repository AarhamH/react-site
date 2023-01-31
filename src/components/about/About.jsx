import React, {useEffect} from 'react'
import './about.css'
import ME from '../../assets/profile.png'
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
          <p>My name is Aarham Haider and I am interested in creating various things. I am currently a Computer Science student 
            at Simon Fraser University, where I was able to study and develop expertise in various CS skills and conventions. I am
            also an aspiring video game developer and I have started production on two larger scale game projects during the summer of 2021.
            Recently, I gained interest in web development, which has drove me to build the website before your eyes!
            If you would like to contact me, shoot me an email or contact me through the means listed below!
          </p>
          
          <div className='list-type'>
            <div className='list'>
              Education
              <ul>
                <li>Simon Fraser University</li>
              </ul>
            </div>
          </div>

          <div className='list-type'>
            <div className='list'>
              Dev Interests
              <ul>
                <li>Game Development</li>
                <li>Web Development</li>  
              </ul>
            </div>
          </div>

          <div className='list-type'>
            <div className='list'>
              Hobbies
              <ul>
                <li>Playing the piano</li>  
                <li>Painting</li>
                <li>Watching Sports</li>  
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About