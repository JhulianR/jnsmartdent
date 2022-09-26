import React from 'react';
import { NavLink } from 'react-router-dom';

const paginas = [1,2,3,4];


function BotonPagina() {
    return (
        <>
        <div className='btnCambiarPag'>

            
            <NavLink to='/productos'>
            <button>
                {paginas[0]}
            </button>
            </NavLink>

            <NavLink to='/productos/2'>
            <button>
            {paginas[1]}
            </button>
            </NavLink>

            <NavLink to='/productos/3'>
            <button>
            {paginas[2]}
            </button>
            </NavLink>

            <NavLink to='/productos/4'>
            <button>
            {paginas[3]}
            </button>
            </NavLink>

        </div>
        </>
    );
}

export default BotonPagina;