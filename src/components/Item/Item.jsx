import React from 'react'

function Item({prod}) {
    return (
        <div className='item'>
            <img src={prod.img} alt={prod.name} />
            <h3>{prod.name}</h3>
            <p>${prod.price}</p>
        </div>
    )
}

export default Item
