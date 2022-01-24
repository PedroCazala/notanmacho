import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext';

function TotalCart() {
    const {cartList}=useContext(CartContext)

    let arrayDeTotales = cartList.map(valor=>valor.price*valor.cantidad)
    let total = arrayDeTotales.reduce((a,b)=>a+b)

    console.log(total);

    return <div>
        ${total}
    </div>;
}

export default TotalCart;
