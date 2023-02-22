import React from 'react'
import '../css/carousel.css'
import image1 from '../assets/02.jpg'
import image2 from '../assets/03.jpg'

const CarouselApp = () => {
  return (
    <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
  <div className="carousel-inner container-carousel">
    <div className="carousel-item active">
      <img src={image1} className="d-block w-100" alt="image 1"/>
    </div>
    <div className="carousel-item">
      <img src={image2} className="d-block w-100" alt="image 2"/>
    </div>
    <div className="overlay">
        <div className="h-100 d-flex flex-column justify-content-center align-items-center text-white p-3">
            <h3 className="text-center">Conoce al robot que hará tu vida mas fácil</h3>
            <button className="btn btn-outline-light btn-lg">Concocé Más</button>
        </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default CarouselApp