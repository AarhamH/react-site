import React, {useEffect} from 'react'
import './experience.css'
import {SiCplusplus} from 'react-icons/si'
import {SiC} from 'react-icons/si'
import {SiCsharp} from 'react-icons/si'
import {SiPython} from 'react-icons/si'
import {SiHtml5} from 'react-icons/si'
import {SiCss3} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {SiUnity} from 'react-icons/si'
import {SiGodotengine} from 'react-icons/si'
import {SiReact} from 'react-icons/si'
import {SiNodedotjs} from 'react-icons/si'
import {AiOutlineConsoleSql} from 'react-icons/ai'
import {SiMicrosoftexcel} from 'react-icons/si'
import AOS from 'aos'
import "aos/dist/aos.css"


const Experience = () => {
  useEffect(() => {
    AOS.init({duration: 1000});
  }, [])

  return (
    <section id='experience'>
      <h5 data-aos='fade-up'>Check out my</h5>
      <h2 data-aos='fade-up'>Skills and Competencies</h2>

      <div className="container competency_container">
        <div className="languages">
          <h3 data-aos='fade'>Languages</h3>
          <div className="competency_content">
            <article data-aos='fade-right' className='competency_details'>
              <SiCplusplus className='competency_details-icon'/>
              <div>
              <h4>C++</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article data-aos='fade-right' className='competency_details'>
              <SiC className='competency_details-icon'/>
              <div>
                <h4>C Language</h4>
                <small className='text-light'>Intermediate</small>
              </div>  
            </article>

            <article data-aos='fade-right' className='competency_details'>
              <SiCsharp className='competency_details-icon'/>
              <div>
                <h4>C#</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article data-aos='fade-right' className='competency_details'>
              <SiPython className='competency_details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Basic</small>
              </div>

            </article>

            <article data-aos='fade-right' className='competency_details'>
              <SiHtml5 className='competency_details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            <article data-aos='fade-right' className='competency_details'>
              <SiCss3 className='competency_details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Basic</small>
              </div>

            </article>

            <article data-aos='fade-right' className='competency_details'>
              <SiJavascript className='competency_details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Basic</small>
              </div>

            </article>
          </div>
        </div>

        <div  className="tools">
          <h3 data-aos='fade'>Tools & Frameworks</h3>
          <div className="competency_content">
            <article data-aos='fade-right' className='competency_details'>
              <SiUnity data-aos='fade-right' className='competency_details-icon'/>
              <div>
                <h4>Unity</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article data-aos='fade-right' className='competency_details'>
              <SiGodotengine className='competency_details-icon'/>
              <div>
                <h4>Godot</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article data-aos='fade-right' className='competency_details'>
              <SiReact className='competency_details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            <article data-aos='fade-right' className='competency_details'>
              <SiNodedotjs className='competency_details-icon'/>
              <div>
                <h4>Node.js</h4>
                <small className='text-light'>Basic</small>
              </div>

            </article>
          </div>
        </div>

        <div className="databases">
          <h3 data-aos='fade'>Data Bases</h3>
          <div className="competency_content">
            <article data-aos='fade-right' className='competency_details'>
              <AiOutlineConsoleSql className='competency_details-icon'/>
              <div>
                <h4>SQL</h4>
                <small className='text-light'>Basic</small>
              </div>

            </article>

            <article data-aos='fade-right' className='competency_details'>
              <SiMicrosoftexcel className='competency_details-icon'/>
              <div>
                <h4>Microsoft Excel</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience