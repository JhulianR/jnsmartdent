import React from 'react'
import { NavLink } from 'react-router-dom'

export const AcercaNos = () => {
  return (
    <div className="sec2Container row">
    <div className="acercaDe col-xl-3">
      <h1 className="animate__animated animate__fadeInLeft">¿Quiénes Somos?</h1>
      <p className="animate__animated animate__fadeIn">Somos distribuidores de productos e insumos odontológicos. Pedidos e información al 3114467941,
        envíos a nivel nacional,
        pagos 100% seguros.</p>
    </div>

    <div className="envios col-xl-3">
      <h1 className="animate__animated animate__fadeInDown">Envíos</h1>
      <p className="animate__animated animate__fadeIn">Proveemos envíos inmediatos en la ciudad de Bogotá mediante además de envíos rápidos a todo el país por medio de transportadoras (Deprisa, Interrapidísimo, etc).
       
      El precio del envío puede cambiar según el peso del producto,
    ¿quieres saber más? </p>
        <div className="contBoton">
        <a className='botonNeuro' href="https://wa.link/w3b4tc" target="_blank" rel="noreferrer">
          Contáctanos
        </a>
        </div>
    </div>
    
    <div className="preferir col-xl-3">
      <h1 className="animate__animated animate__fadeInRight">¿Por qué comprar con nosotros?</h1>
      <p className="animate__animated animate__fadeIn">Al ser una tienda únicamente online nuestros clientes pueden disfrutar de una experiencia rápida y eficaz al momento de comprar nuestros productos, ahorran tiempo y dinero en movilidad aumentando su productividad.</p>
    </div>
    <div className="botonMovil">
      <a className='botonNeuro' href="https://wa.link/w3b4tc" target="_blank" rel="noreferrer"> Contáctanos </a>
    </div>
  </div>  )
}
