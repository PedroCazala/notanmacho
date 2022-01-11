import React from 'react'
import { NavLink } from 'react-router-dom';
import { categorias } from './categorias'

function MenuSeccionCategoria() {
    return (
        <div>
            {categorias.map(objeto=>{
                return(
                    <ul key={objeto.categoria.replaceAll(' ','-')}>
                        <li>
                            <NavLink end to={`/categoria/${objeto.categoria.replaceAll(' ','-')}`} className='titulo'>
                                {objeto.categoria}
                            </NavLink>
                        </li>
                        {objeto.subcategorias.map(
                            (sub) => {
                                return(
                                    <li key={sub.replaceAll(' ','-')}>
                                        <NavLink end /*activeClassName='categoryNameActive'*/ to={`/categoria/${objeto.categoria}/${sub.replaceAll(' ','-')}`}>
                                            {sub}
                                        </NavLink>
                                    </li>
                                )
                            }
                        )}      
                    </ul>
                )
            })}
        </div>
    )
}
export default MenuSeccionCategoria
