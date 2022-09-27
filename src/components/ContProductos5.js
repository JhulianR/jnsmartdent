import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import BotonPagina from './botonCambiarPagina';

import ItemCount from './ItemCount';
import ProductosCinco from './Productos5';



const ContenedorProductosCinco = () => {
  
    return (
    
    <>
     <section className="una">
     
     <Container fluid className='Productos'>
     <Row>
     
    {
            ProductosCinco.map(ProductosCinco => (
                
                    <Col xs={12} sm={6} lg={4}>
                    <div className="tarjeta ">
                        <div className="circulo"></div>
                        <div className="conTarjeta">
                            <h3 className="">{ProductosCinco.nombre}</h3>
                            <p>Precio: {ProductosCinco.precio}</p>
                            <div className="counter">
                            <NavLink to="/whatsapp"> <button>Comprar</button> </NavLink>
                            </div>
                            
                        </div>
                            <img className="" src={ProductosCinco.ImagenUrl} alt="" />
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

export default ContenedorProductosCinco;