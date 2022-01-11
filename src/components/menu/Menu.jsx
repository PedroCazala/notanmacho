import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import MenuDesplegable from './menuDesplegable/MenuDesplegable'
import MenuSeccionCategoria from './menuDesplegable/MenuSeccionCategoria'


function Menu() {
    return (
        <header>
            <div className='menu'>
                <Link to='/' className='logo-notanmacho'>No Tan MACHO</Link>
                <nav>
                    <ul>
                        <li className="menu-catalogo"/*onClick={cuando veamos eventos apareceran los menus desplegables}*/>Catálogo</li>
                        <li>Verano 2021</li>
                        <li>Descuentos</li>
                    </ul>
                </nav>
                <Link to='/carrito' ><CartWidget/></Link>
            </div>
            <MenuDesplegable contenido={<MenuSeccionCategoria/>}/>
        </header>
    )
}

export default Menu
