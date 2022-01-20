import React, { useContext } from 'react'
import { CartContext } from '../../context/cartContext'


function Cart() {
    const {cartList, vaciarCarrito,isInCart} = useContext(CartContext)
    console.log(isInCart('5'))
    return (
        <div>
            {cartList.map(producto=>{
                return(
                    <li key={producto.id}>{producto.nombre}, ${producto.precio}, cantidad={producto.cantidad} <img src={producto.img1} alt={producto.nombre}/></li>
                )
            })}
            <button onClick={vaciarCarrito}>Vaciar carrito</button>
        </div>
    )
}

export default Cart
