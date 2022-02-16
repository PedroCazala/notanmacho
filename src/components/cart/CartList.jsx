import React from 'react';
import { useCartContext } from '../../context/cartContext';
import ItemCart from './ItemCart';


function CartList() {
    const {cartList} = useCartContext()
    return(
        cartList.map(producto=>{
            return(
                <ItemCart producto={producto} key={`cart${producto.id}`}/>
            )
        })
    )
}

export default CartList;
