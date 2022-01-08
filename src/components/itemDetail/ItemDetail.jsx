import React from 'react'
import ItemCount from '../contador/ItemCount'
import './itemDetail.scss';
function ItemDetail({producto}) {
    return (
        <div className='itemDetail'>
            <div className='titulo'>
                <h1>{producto.nombre}</h1>
            </div>
            <div className='imagen'>
                <img src={producto.img1} alt={producto.nombre}/>
            </div>
            <div className='aside'>
                <h2>${producto.precio}</h2>
                <ItemCount />
            </div>
        </div>
    )
}

export default ItemDetail
