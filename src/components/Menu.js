import React from 'react'
import CartWidget from './CartWidget'

/*const catalogo = document.getElementById('menu-catalogo')
const catalogoDesplegable = document.getElementById('menu-catalogo-desplegable')
catalogo.addEventListener(hover, () => catalogoDesplegable)*/
function Menu() {
    return (
        <div className='menu'>
            <p className='logo-notanmacho'>No Tan MACHO</p>
            <nav>
                <ul>
                    <li className="menu-catalogo">Catálogo
                        <ul className="menu-catalogo-desplegable">
                            <ul>
                                <li className="tituloUl">Ropa</li>
                                <li>Remeras</li>
                                <li>Camisas</li>
                                <li>Pantalones</li>
                                <li>Buzos</li>
                                <li>Camperas</li>
                                <li>Sweters</li>
                                <li>Bermudas</li>
                                <li>Mayas</li>
                                <li>Ropa deportiva</li>
                                <li>Ropa interior</li>
                            </ul>
                            <ul>
                                <li className="tituloUl">Calsado</li>
                                <li>Zapatillas</li>
                                <li>Zapatos</li>
                                <li>Ojotas y sandalias</li>
                            </ul>
                            <ul>
                                <li className="tituloUl">Accesorios</li>
                                <li>Aros</li>
                                <li>Collares</li>
                                <li>Llaveros</li>
                            </ul>
                            <ul>
                                <li className="tituloUl">Marroquineria</li>
                                <li>Bolsos</li>
                                <li>Mochilas</li>
                                <li>Billeteras</li>
                                <li>Riñoneras</li>
                            </ul>
                        </ul> 
                    </li>
                    <li>Verano 2021</li>
                    <li>Descuentos</li>
                </ul>
            </nav>
            <CartWidget/>
        </div>
    )
}

export default Menu
