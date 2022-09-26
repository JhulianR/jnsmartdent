import React from 'react'
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
const FooterAzul = () => {
  return (
    <footer>
  <div className="waves">
    <div className="wave" id="wave1"></div>
    <div className="wave" id="wave2"></div>
    <div className="wave" id="wave3"></div>
    <div className="wave" id="wave4"></div>
  </div>
  <ul className="social_icon">
    <li><a href="https://www.facebook.com/profile.php?id=100085190274387" target="_blank" rel="noreferrer"> <ion-icon name="logo-facebook"></ion-icon> </a> </li>
    <li><a href="https://instagram.com/jnsmartdent?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer"> <ion-icon name="logo-instagram"></ion-icon> </a> </li>
    <li><a href="https://wa.link/w3b4tc" target="_blank" rel="noreferrer"> <ion-icon name="logo-whatsapp"></ion-icon> </a> </li>
    <li><a href="https://wa.link/w3b4tc" target="_blank" rel="noreferrer"> <ion-icon name="call-outline"></ion-icon> </a> </li>
  </ul>
  <ul className="menu">
    <li><Link to="/inicio#sobreNos"> Acerca de </Link></li>
    <li> <a href="https://wa.link/w3b4tc" target="_blank" rel="noreferrer">Contacto</a></li>
    <li><NavLink to="/pagos"> Cómo comprar</NavLink></li>
    <li><NavLink to="/productos"> Catálogo</NavLink></li>
  </ul>
  <p> <a href="https://www.instagram.com/lupusdesarrolloweb/" target="_blank" rel="noreferrer">Desarrollado por  Lupus Desarrollo Web</a></p>
</footer>
  )
}

export default FooterAzul;