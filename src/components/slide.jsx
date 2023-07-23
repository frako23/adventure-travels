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
                <i className="fas fa-caret-right"></i>
              </button>
              <button className="next" onClick={nextSlide}>
                <i className="fas fa-caret-left"></i>
              </button>
            </div>
        </section>

        {data.map((slide, index) => {
          return(
            <div 
            className={index === current? "slide active" : "slide"} key={index}
            >
             
              {index === current && <img src={slide.imagen} alt="Home Image"/>}
            </div>
        )})}
    </>
  )
}
