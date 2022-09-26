import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import BotonPagina from './botonCambiarPagina';

import ItemCount from './ItemCount';
import Productos from './Productos';



const ContenedorProductos = () => {
  
    return (
    
    <>
     <section className="una">
     <div className='conteTitulo'>
        <h1 className='tituloProductos'>Catálogo</h1>
     </div>
     <Container fluid className='Productos'>
     <Row>
     
    {
            Productos.map(Productos => (
                
                    <Col xs={12} sm={6} md={4} lg={4}>
                    <div className="tarjeta ">
                        <div className="circulo"></div>
                        <div className="conTarjeta">
                            <h3 className="">{Productos.nombre}</h3>
                            <p>Precio: {Productos.precio}</p>
                            <div className="counter">
                            <NavLink to="/pagos"> <button>Comprar</button> </NavLink>
                            </div>
                            
                        </div>
                            <img className="" src={Productos.ImagenUrl} alt="" />
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

export default ContenedorProductos;