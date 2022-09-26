import React from 'react'


const Pagos = () => {
  return (
    <>
   
        <div className='dosP'>
        <div className='pago'>
        <h1>Formas de Pago</h1>
        <p>Para comprar de nuestros productos puedes consignar en Nequi y Daviplata al número 3114467941.</p>
        <ul>
            <li>Consigna por el precio de los productos</li>
            <li>Añade una nota con el nombre de tu producto y la dirección de entrega.</li>
            <li>Si te saltaste el paso anterior sólo contáctanos con un comprobante de tu compra y dános tu dirección.</li>
            <li>¿Quieres un producto que no está en el catálogo? <a href="https://wa.link/w3b4tc" target="_blank" rel="noreferrer">Contáctanos. </a> </li>
        </ul>
        <div className='contenedorPago'>
        <a href="https://www.nequi.com/" target="_blank" rel="noreferrer"> <img src='./img/Nequi.png'></img> </a>
        <a href="https://daviplata.com/" target="_blank" rel="noreferrer"> <img src='./img/daviplata.png'></img> </a>
        </div>
        </div>
        </div>
  
        </>
    
  )
}

export default Pagos