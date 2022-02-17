import React from 'react';
import { useCartContext } from '../../context/cartContext';
import ItemCart from './ItemCart';


function CartList() {
    const {cartList} = useCartContext()
    return(
        cartList.map(product=>{
            return(
                <ItemCart product={product} key={`cart${product.id}`}/>
            )
        })
    )
}

export default CartList;
