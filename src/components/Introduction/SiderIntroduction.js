import React from 'react';
import img1 from '../../img/01.jpg'
import img2 from '../../img/02.jpg'
import img3 from '../../img/03.jpg'

export default function SiderIntroduction() {
  return (
    <html>
    <div id="carouselExampleDark" className="carousel carousel-dark slide hello">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src={img1} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Welcome to</h5>
            <p>Wathsala Yahampath</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={img2} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Front End developer</h5>
            <p>Software Engineering ungergradutae in University of Kelaniya.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={img3} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Musician</h5>
            <p>Trying to make contents with valuble meanings.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </html>
  );
}
