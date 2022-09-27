import React from 'react';
import { NavLink } from 'react-router-dom';




function BotonPagina() {
    return (
        <>
        <div className='btnCambiarPag'>

            
            <NavLink to='/productos'>
            <button>
                1
            </button>
            </NavLink>

            <NavLink to='/productos/2'>
            <button>
            2
            </button>
            </NavLink>

            <NavLink to='/productos/3'>
            <button>
           3
            </button>
            </NavLink>

            <NavLink to='/productos/4'>
            <button>
            4
            </button>
            </NavLink>

        </div>
        </>
    );
}

export default BotonPagina;