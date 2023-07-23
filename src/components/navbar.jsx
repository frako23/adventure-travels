import {useState} from "react"
import logo from "../assets/img/logo.png";

export const Navbar = () => {
    const [click, setClick] = useState(false)
  

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)


    return (
    <>
        <nav className="navbar">
            <div className="container flex-space">
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fa-solid fa-bars" }></i>
                    {/*  */}
                </div>

            <div className="navbar-logo-section">
            <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu" }>
                    <li>
                        <a href="#" onClick={closeMobileMenu}>Home</a>
                        <a href="#" onClick={closeMobileMenu}>Nosotros</a>
                        <a href="#" onClick={closeMobileMenu}>Galería</a>
                        <a href="#" onClick={closeMobileMenu}>Destinos</a>
                        <a href="#" onClick={closeMobileMenu}>Testimoniales</a>
                        <a href="#" onClick={closeMobileMenu}>Contáctanos</a>
                    </li>
                </ul>
                </div>
                {/* <div className="login-area flex">
                <li>
                        <i className="fas fa-chevron-right">Regístrate</i>
                    </li>
                    <li>
                        <i className="fas fa-chevron-right">Ingresa</i>
                    </li>
                    <li>
                        <button className="primary-btn">Realiza una búsqueda</button>
                    </li>
                </div> */}
            </div>
        </nav>

        <header>
            <div className="container flex-space">
                

                {/* <div className="contact flex-space">
                    <div className="box flex-space">
                        <div className="icons">
                            <i className="fas fa-clock"></i>
                        </div>
                        <div className="text">
                            <h4>Horario de trabajo</h4>
                            <a href="#">Lunes - Domingo: 9.00am a 6.00pm</a>
                        </div>
                    </div>
                    <div className="box flex-space">
                        <div className="icons">
                            <i className="fas fa-phone"></i>
                        </div>
                        <div className="text">
                            <h4>Horarios de llamada</h4>
                            <a href="#">+58 0412123456 </a>
                        </div>
                    </div>
                    <div className="box flex-space">
                        <div className="icons">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="text">
                            <h4>Envianos un correo</h4>
                            <a href="#">Lunes - Domingo: 9.00am a 6.00pm</a>
                        </div>
                    </div>
                </div> */}
            </div>
        </header>
    </>
  )
}
