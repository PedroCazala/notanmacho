import React, { useContext } from 'react'
import logoCarrito from '../../assets/images/logos/carritoNegro.svg'
import { CartContext } from '../../context/cartContext'
import './cartWidget.scss'
function CartWidget() {
    const {cartList} = useContext(CartContext)
    let arrayDeCantidadesTotales = cartList.map(valor=>valor.cantidad)
    let total = arrayDeCantidadesTotales.reduce((a,b)=>a+b,0)
    return (
        <div className='cartWidget'>
            <img src={logoCarrito} alt='Logo Carrito' className='icono'/>
            {total > 0 &&<p className='cantidaEnCarrito'>{total}</p>}
        </div>
    )
}

export default CartWidget;

