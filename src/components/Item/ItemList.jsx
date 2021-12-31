import React from 'react'
import Item from './Item'
// import ItemListContainer from '../ItemListContainer/ItemListContainer'


function ItemList({productos}) {
    return (
        <div className='itemList'>
            {productos.map(producto=><Item prod={producto}/>)}
        </div>
    )
}

export default ItemList
