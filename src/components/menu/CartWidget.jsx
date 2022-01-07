import React from 'react'
import logoCarrito from '../../assets/images/logos/carritoNegro.svg'

function CartWidget() {
    return (
        <div>
            <img src={logoCarrito} alt='Logo Carrito' className='icono'/>
        </div>
    )
}

export default CartWidget;

