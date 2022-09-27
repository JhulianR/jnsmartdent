import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ContenedorProductosDos from './components/ContProductos2';
import ContenedorProductos from './components/ContenedorProductos';
import ContenedorProductosTres from './components/ContProductos3';
import ContenedorProductosCuatro from './components/ContProductos4';
import ContenedorProductosCinco from './components/ContProductos5';

import FooterAzul from './components/FooterAzul';

import Inicio from './components/inicio';
import NavBar from './components/NavBar';
import Pagos, { RedirectNequi } from './components/Pagos';
import { WhatsApp } from './components/EnlacesExternos';





function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<Inicio />} /> 
      <Route path='/inicio' element={<Inicio />} /> 
      <Route path='/productos' element={<ContenedorProductos />} /> 
      <Route path='/productos/2' element={<ContenedorProductosDos />} />
      <Route path='/productos/3' element={<ContenedorProductosTres />} />
      <Route path='/productos/4' element={<ContenedorProductosCuatro />} />
      <Route path='/productos/5' element={<ContenedorProductosCinco />} />
      <Route path='/pagos' element={<Pagos />} />
      <Route path='/whatsapp' element={<WhatsApp />} /> 
     
    </Routes>
    <FooterAzul />
    </BrowserRouter>
    </>
  );
}


export default App;
