import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/ball-dodger-gif.gif'
import IMG2 from '../../assets/dungeon-crawlers.gif'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>These are my works</h5>
      <h2>Projects</h2>

      <div className="container portfolio_container">
        <article className='portfolio_items'>
          <div className="portfolio_items-image">
            <img src={IMG1} alt="" />
          </div>
          <h3> Ball Dodgers</h3>
          <div className="portfolio_items-cta">
            <a href="https://github.com/AarhamH/ball-dodger" className='btn' target='_blank'>Github</a>
            <a href="https://aarhamh.itch.io/ball-dodgers" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_items'>
          <div className="portfolio_items-image">
            <img src={IMG2} alt="" />
          </div>
          <h3> Pichi Dungeon Crawlers</h3>
          <div className="portfolio_items-cta">
            <a href="https://github.com/AarhamH/ball-dodger" className='btn' target='_blank'>Github</a>
            <a className='btn btn-primary' target='_blank'>COMING SOON</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio