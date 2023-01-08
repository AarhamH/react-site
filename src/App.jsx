import React, {useState, useEffect} from 'react'
import Load from './components/load/Load'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


const App = () => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4800)
  }, [])
  
  return (
    <>
        <div className="loader-content"></div>
        {
          loading ?
            <Load
            />
          :
          <div className='web'>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Portfolio />
            <Contact />
            <Footer />
          </div>

        }

    </>
  )
}

export default App