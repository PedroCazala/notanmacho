import React from 'react';
import { useCartContext } from '../../context/cartContext';
import CartCount from './CartCount';
import './itemCart.scss'


function ItemCart({producto}) {
    const {eliminarItemDelCarrito} = useCartContext()
    return (
        <div  className='itemCart'>
            <img src={producto.img} alt={producto.name}/>
            <div className='contenido'>
                <div className='titulo'>{producto.name}</div>
                <div className='precio'>${producto.price}</div>
                <CartCount className='contador'producto={producto}/>
                <div className='total'>
                    cantidad={producto.cantidad}
                    <br/>
                    precio= ${producto.cantidad*producto.price}
                </div>
                <div className='botones'>
                    <button className='boton2' onClick={()=>eliminarItemDelCarrito(producto)}>Eliminar Producto</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCart;
