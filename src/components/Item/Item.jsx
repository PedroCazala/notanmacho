import React from 'react'
// import { getFetch } from '../../helpers/mock'

// getFetch
function Item({prod}) {
    return (
        <div className='item'>
            <img src={prod.img[0]} alt={prod.name} />
            <h3>{prod.name}</h3>
            <p>${prod.price}</p>
        </div>
    )
}

export default Item
