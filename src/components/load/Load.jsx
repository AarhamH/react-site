import React from 'react'
import IMG2 from '../../assets/logo-intro.mp4'
import './load.css'


const Load = () => {
  return (
    <section id='load'>

      <div className="container load_container">

          <div className="rat">
          <video autoPlay muted>
            <source src={IMG2} type="video/mp4"/>
          </video> 
      </div>

      </div>
    </section>
  )
}

export default Load