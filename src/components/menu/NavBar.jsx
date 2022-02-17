import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import DropdownNavbar from './DropdownNavbar/DropdownNavbar'
import MenuSeccionCategoria from './DropdownNavbar/MenuSeccionCategoria'


function NavBar() {
    const [showCategorias, setShowCategorias] =useState(false)
    
    const mostrar = ()=>{
        setShowCategorias(true)
    } 
    const ocultar = ()=>{
        setShowCategorias(false)
    } 
    return (
        <header onMouseLeave={ocultar}>
            <div className='menu'>
                <Link to='/' className='logo-notanmacho'>No Tan MACHO</Link>
                <nav>
                    <ul>
                        <li className="menu-catalogo" onMouseEnter={mostrar}/*hove={}*/>Catálogo</li>
                        <li>Verano 2021</li>
                        <li>Descuentos</li>
                    </ul>
                </nav>
                <Link to='/carrito' ><CartWidget/></Link>
            </div>
            {showCategorias && <DropdownNavbar contenido={<MenuSeccionCategoria/>} />}
        </header>
    )
}

export default NavBar
