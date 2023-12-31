// import React from 'react'

export const Footer = () => {
  return (
    <>
    <footer>
      <div className='container grid'>
        <div className='box'>
          <h2>ABOUT US</h2>
          <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet consectetur scing elit amet consectetur adipiscing elit sed et eletum.</p>
          <br />
          <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet consectetur scing elit amet.</p>
          <div className='icon flex_space'>
          <a  href="https://www.facebook.com/adventuretravelslatam"><i className='fa-brands fa-facebook'></i></a>
            <i className='fa-brands fa-twitter'></i>
            <i className='fa-brands fa-linkedin'></i>
            <a  href="https://www.instagram.com/adventuretravelsve/"><i className='fa-brands fa-instagram'></i></a>
            <a  href="https://wa.me/584241558007"><i className='fa-brands fa-whatsapp'></i></a>
            <i className='fa-brands fa-youtube'></i>
          </div>
        </div>

        <div className='box'>
          <h2>NAVIGATION</h2>
          <ul className="navigation">
            <li>
              <a to='/'>Home</a>
            </li>
            <li>
              <a to='/about'>About us</a>
            </li>
            <li>
              <a to='/gallery'>Gallery</a>
            </li>
            <li>
              <a to='/destinations'>Destinations</a>
            </li>
            <li>
              <a to='/blog'>Blog</a>
            </li>
            <li>    
              <a to='/testimonial'>Testimonial</a>
            </li>
            <li>
              <a to='/contact'>Contact Us</a>
            </li>
          </ul>
        </div>
{/* 
        <div className='box post'>
          <h2>RECENT POSTS</h2>
          <ul>
            <li>
              <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>
              <label className='fa fa-calendar-alt'></label>
              <span>01 Oct 2020</span>
            </li>
            <li>
              <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>
              <label className='fa fa-calendar-alt'></label>
              <span>01 Oct 2020</span>
            </li>
            <li>
              <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>
              <label className='fa fa-calendar-alt'></label>
              <span>01 Oct 2020</span>
            </li>
          </ul>
        </div> */}

        {/* <div className='box'>
          <h2>NEWSLETTER</h2>
          <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>

          <input type='text' name='' id='' />
          <input type='text' className='primary-btn' value='SUBSCRIBE' />
        </div> */}
      </div>
    </footer>
    <div className='legal'>
      <p>Creado por Devix © 2023 Todos los derechos reservados.</p>
    </div>
  </>
  )
}
