import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import BotonPagina from './botonCambiarPagina';

import ItemCount from './ItemCount';
import ProductosTres from './Productos3';



const ContenedorProductosTres = () => {
  
    return (
    
    <>
     <section className="una">
     <div className='conteTitulo'>
     <h1 className='tituloProductos'>Catálogo (3)</h1>
     </div>
     <Container fluid className='Productos'>
     <Row>
     
    {
            ProductosTres.map(ProductosTres => (
                
                    <Col xs={12} sm={6} md={4} lg={4}>
                    <div className="tarjeta ">
                        <div className="circulo"></div>
                        <div className="conTarjeta">
                            <h3 className="">{ProductosTres.nombre}</h3>
                            <p>Precio: {ProductosTres.precio}</p>
                            <div className="counter">
                            <a href="https://wa.link/w3b4tc" target="_blank" rel="noreferrer"> <button>Comprar</button> </a>
                            </div>
                            
                        </div>
                            <img className="" src={ProductosTres.ImagenUrl} alt="" />
                        </div>
                    </Col>
                
            ))
    }
    
    </Row>
    </Container>
    <BotonPagina />
      </section>
      
      </>

  )
}

export default ContenedorProductosTres;