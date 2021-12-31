import React from 'react'
// import { getFetch } from '../../helpers/mock'

// getFetch
function Item({prod}) {
    return (
        <div className='item'>
            <img src={prod.img1} alt="" />
            <h3>{prod.nombre}</h3>
            <p>${prod.precio}</p>
        </div>
    )
}

export default Item
