import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';

function TarjetaSecTres() {
  return (
    <div className='sec3card'>
<Card className="card mb-3 grad bg-dark" border="dark" >
      <Card.Img src="./img/equipos.png" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title className='cardTitulo'>Equipos</Card.Title>
        <Card.Text>
          Variedad de equipos para tus procedimientos dentales.
        </Card.Text>
        <div class="contBoton2">
              <NavLink to="/productos" className=''>Catálogo ></NavLink>
        </div>
      </Card.ImgOverlay>
    </Card>

    <Card className="card mb-3 grad bg-dark" border="dark">
    <Card.Img src="./img/Endodoncia.png" alt="Card image" />
    <Card.ImgOverlay>
    <Card.Title className='cardTitulo'>Endodoncia</Card.Title>
    <Card.Text>
    Anestesia, aislamiento y demás herramientas para endodoncia.
    </Card.Text>
    <div className="contBoton2">
              <NavLink to="/productos" className=''>Catálogo ></NavLink>
        </div>
    </Card.ImgOverlay>
    </Card>

    <Card className="card mb-3 grad bg-dark" border="dark">
        <Card.Img src="./img/blanqueamiento.png" alt="Card image" />
        <Card.ImgOverlay>
            <Card.Title className='cardTitulo'>Blanqueamiento</Card.Title>
            <Card.Text>
            Gel, tiras, equipos, kits y todo lo que necesitas para blanqueamiento.
            </Card.Text>
         <div className="contBoton2">
              <NavLink to="/productos" className=''>Catálogo ></NavLink>
        </div>   
        </Card.ImgOverlay>
        </Card>

    <Card className="card mb-3 grad bg-dark" border="dark">
    <Card.Img src="./img/ortodoncia.png" alt="Card image" />
    <Card.ImgOverlay>
    <Card.Title className='cardTitulo'>Ortodoncia</Card.Title>
    <Card.Text>
    Brackets y los equipos más avanzados para ortodoncias.
    </Card.Text>
    <div className="contBoton2">
              <NavLink to="/productos" className=''>Catálogo ></NavLink>
        </div>
    </Card.ImgOverlay>
    </Card>

    <Card className="card mb-3 grad bg-dark" border="dark">
        <Card.Img src="./img/Consultas.png" alt="Card image" />
        <Card.ImgOverlay>
            <Card.Title className='cardTitulo'>Consultas</Card.Title>
            <Card.Text>
            ¿Tienes dudas? Comunícate con nosotros y resuelvelas.
            </Card.Text>
         <div className="contBoton2">
              <a href="https://wa.link/w3b4tc" target="_blank" rel="noreferrer">
          Pregunta >
        </a>
        </div>   
        </Card.ImgOverlay>
        </Card>
    </div>
  );
}

export default TarjetaSecTres;