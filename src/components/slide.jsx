import { useState } from "react";

import  data  from "../assets/data";

export const Slide = ({slides}) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length


  const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current + 1)
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length -1 : current -1)
  }

  if(!Array.isArray(slides) || slides.length <= 0){
    return null
  }

  return (
    <>
        <section className='slider'>
            <div className='control-btn'>
              <button className="prev" onClick={prevSlide}>
                <i className="fas fa-caret-left"></i>
              </button>
              <button className="next" onClick={nextSlide}>
                <i className="fas fa-caret-right"></i>
              </button>
            </div>

        {data.map((slide, index) => {
          return(
            <div 
            className={index === current? "slide activer" : "slide"} key={index}
            >
             
              {index === current && <img src={slide.imagen} alt="Home Image"/>}
            </div>
        )})}
        </section>

        <section className="slide-form">
          <div className="container">
            <h2>Disfruta tus vacaciones</h2>
            <span>Busca y reserva tu hotel</span>

            <form action="">
              <input type="text"  placeholder="Buscar Ciudad" name="" id=""/>
              <div className="flex-space">
                <input type="date" placeholder="Check In"/>
                <input type="date" placeholder="Check Out"/>
              </div>
              <div className="flex-space">
                <input type="number" placeholder="Adulto(s)(+18)"/>
                <input type="number" placeholder="Check Niños(0 - 17)"/>
              </div>
              <input type="number" placeholder="Habitaciones"/>
              <input type="submit" placeholder="Buscar" className="submit"/>
            </form>
          </div>
        </section>
    </>
  )
}
