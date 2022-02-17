import React from 'react'
import { Link } from 'react-router-dom'
import Item from './Item'
// import ItemListContainer from '../ItemListContainer/ItemListContainer'


function ItemList({products}) {
    return (
        <div className='itemList'>
            {products.map(product=>
            <Link to={`/detalle/${product.id}`} key={product.id}>
                <Item prod={product}/>
            </Link>)}
        </div>
    )
}

export default ItemList
