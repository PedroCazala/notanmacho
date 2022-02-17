import React from 'react';
import { useCartContext } from '../../context/cartContext';
import CartCount from './CartCount';
import './itemCart.scss'


function ItemCart({product}) {
    const {eliminarItemDelCarrito} = useCartContext()
    return (
        <div  className='itemCart'>
            <img src={product.img} alt={product.name}/>
            <div className='contenido'>
                <div className='titulo'>{product.name}</div>
                <div className='precio'>${product.price}</div>
                <CartCount className='contador'product={product}/>
                <div className='total'>
                    <br/>
                    precio= ${product.quantity*product.price}
                </div>
                <div className='botones'>
                    <button className='boton2' onClick={()=>eliminarItemDelCarrito(product)}>Eliminar Producto</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCart;
