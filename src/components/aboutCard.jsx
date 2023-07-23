// import React from 'react'
import img from "../assets/img/aboutCard.jpg"

export const AboutCard = () => {
  return (
    <>
    <div className='aboutCard mtop flex_space'>
      <div className='row row1'>
        <h4>Nosotros</h4>
        <h1>
          Brindamos <span>Soluciones</span> para hacer crecer tu negocio
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p>
        <button className='secondary-btn'>
          Descubre más <i className='fas fa-long-arrow-alt-right'></i>
        </button>
      </div>
      <div className='row image'>
        <img src={img} alt='' />
        <div className='control-btn'>
          <button className='prev'>
            <i className='fas fa-play'></i>
          </button>
        </div>
      </div>
    </div>
  </>
  );
};
