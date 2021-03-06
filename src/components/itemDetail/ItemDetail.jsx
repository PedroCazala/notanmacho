import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../contador/ItemCount'
import { CartContext } from '../../context/cartContext';
import './itemDetail.scss';
function ItemDetail({product}) {
    const [show, setShow] =useState(true)

    const {agregarAlCarrito} = useContext(CartContext)

    const onAdd =(cant)=>{
        setShow (false)
        agregarAlCarrito({...product, quantity:cant});
    }
    
    return (
        <div className='itemDetail' >
            <div className='titulo'>
                <h1>{product.name}</h1>
            </div>
            <div className='imagen'>
                <img src={product.img} alt={product.name}/>
            </div>
            <div className='aside'>
                <h2>${product.price}</h2>
                {show ? 
                        <ItemCount stock={product.stock} initial={1} quantityInDetail={(cant)=>onAdd(cant)}/>
                    :
                        <div className='divBotones'>
                            <Link to='/carrito'>
                                <button className='boton2'>Ir al Carrito</button>
                            </Link>
                            <Link to='/'>
                                <button className='boton2'>Seguir comprando</button>
                            </Link>
                        </div>
                }
            </div>
        </div>
    )
}

export default ItemDetail
