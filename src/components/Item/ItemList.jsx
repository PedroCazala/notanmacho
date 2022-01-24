import React from 'react'
import { Link } from 'react-router-dom'
import Item from './Item'
// import ItemListContainer from '../ItemListContainer/ItemListContainer'


function ItemList({productos}) {
    return (
        <div className='itemList'>
            {productos.map(producto=>
            <Link to={`/detalle/${producto.id}`} key={producto.id}>
                <Item prod={producto}/>
            </Link>)}
        </div>
    )
}

export default ItemList
