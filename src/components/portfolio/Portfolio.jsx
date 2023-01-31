import React, {useEffect} from 'react'
import './portfolio.css'
import IMG1 from '../../assets/ball-dodger-gif.gif'
import IMG2 from '../../assets/dungeon-crawlers.gif'
import IMG3 from '../../assets/type-racer.gif'
import AOS from 'aos'
import "aos/dist/aos.css"


const Portfolio = () => {
  useEffect(() => {
    AOS.init({duration: 1000});
  }, [])

  return (
    <section id='portfolio'>
      <h5 data-aos='fade-up'>These are my</h5>
      <h2 data-aos='fade-up'>Projects!</h2>

      <div className="container portfolio_container">
        <article data-aos='fade-up' className='portfolio_items'>
          <div className="portfolio_items-image">
            <img src={IMG1} alt="" />
          </div>
          <h3> Ball Dodgers</h3>
          <div className="portfolio_items-cta">
            <a href="https://github.com/AarhamH/ball-dodger" className='btn' target='_blank'>Github</a>
            <a href="https://aarhamh.itch.io/ball-dodgers" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article data-aos='fade-up' className='portfolio_items'>
          <div className="portfolio_items-image">
            <img src={IMG2} alt="" />
          </div>
          <h3> Forest of Doom</h3>
          <div className="portfolio_items-cta">
            <a href="https://github.com/AarhamH/pichi-dungeon-crawlers" className='btn' target='_blank'>Github</a>
            <a href="https://aarhamh.itch.io/forest-of-doom" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article data-aos='fade-up' className='portfolio_items'>
          <div className="portfolio_items-image">
            <img src={IMG3} alt="" />
          </div>
          <h3> Type Tester</h3>
          <div className="portfolio_items-cta">
            <a href="https://github.com/AarhamH/typing-test-project" className='btn' target='_blank'>Github</a>
            <a href="http://type-tester.infinityfreeapp.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio