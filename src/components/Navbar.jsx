import React, { useState, useEffect } from 'react'
import {obtenerClima} from '../helpers/clima.js'

const navbar = ({ToggleDarkMode,darkMode}) => {

    const [tiempo, setTiempo] = useState(null)

    useEffect(() => {
        obtLugar()
    }, [])
    
    const obtLugar = () => {
        navigator.geolocation.getCurrentPosition((pos) => {
          const coords = pos.coords;
          const lat = coords.latitude;
          const long = coords.longitude;
      
          obtenerClima(lat, long)
          .then((resultado) => {
            const {main,weather}=resultado
            setTiempo({
              temp: main.temp,
              clima: weather,
            })

          })
          .catch((error)=>console.log(error))
        });
      };

  return (
    <div className="fixed-top">
        <nav className={`navbar navbar-expand-lg ${darkMode?"bg-dark-svg navbar-dark":"bg-light-svg navbar-light"}`}>
  <div className="container">
    <a className="navbar-brand" href="#"><i className="fa fa-ravelry" aria-hidden="true"></i> Kindle</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
      {
        tiempo&&(
      <div className={`d-flex me-3 align-items-center justify-content-center ${darkMode&&"text-light"}`}>
        <img src={`https://openweathermap.org/img/wn/${tiempo.clima[0].icon}.png`} alt={tiempo.clima[0].icon} />
        <span>{tiempo.temp}</span>
      </div>
        )
      }
      <div className="d-flex align-items-center justify-content-center">
      {!darkMode?<i className="fa fa-sun-o" aria-hidden="true"></i>:<i className="fa fa-moon-o text-light" aria-hidden="true"></i>}
      <div className="form-check form-switch mx-2">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={ToggleDarkMode}/>
      </div>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default navbar