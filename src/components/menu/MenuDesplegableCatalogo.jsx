import React from 'react'
import MenuDesplegable from './menuDesplegable/MenuDesplegable'
import { categorias } from './menuDesplegable/categorias';
import MenuSeccionCategoria from './menuDesplegable/MenuSeccionCategoria';
// const contenido = ()=>{
//     return 
// }
{/* <div>
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
</div>; */}

function MenuDesplegableCatalogo() {
    return (
        <div>
            {/* <MenuDesplegable contenido={contenido}/> */}
            {/* lalala
            {categorias.map(categoria=>{
                return(
            <h1 key={categoria.categoria}>{categoria.categoria}</h1>
                )
            })} */}
            <MenuSeccionCategoria/>
        </div>
    )
}

export default MenuDesplegableCatalogo
