import { useState } from 'react'
import CarouselApp from './components/CarouselApp'
import Navbar from './components/Navbar'
import {detalleCard} from './data/info.js'
import CardApp from './components/CardApp'
import RickMorty from './components/RickMorty'
import Footer from './components/Footer'
import './css/bg-svg.css'
// import ChuckNorris from './components/ChuckNorris'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const toggleDarkMode=()=>{
    setDarkMode(!darkMode)
  }

  return (
    <div className={darkMode?"bg-dark-svg":"bg-light-svg"}>
      <Navbar ToggleDarkMode={()=>toggleDarkMode()} darkMode={darkMode}/>
      <CarouselApp/>
      <div className="container">
        <div className="row my-5">
          {
          detalleCard.map((item,index)=>(
            <CardApp key={index} item={item} darkMode={darkMode}/>
          ))
          }
        </div>
      </div>
      {/* <RickMorty/> */}
      <Footer darkMode={darkMode}/>
    </div>
  )
}

export default App
