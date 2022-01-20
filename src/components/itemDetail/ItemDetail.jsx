import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../contador/ItemCount'
import { CartContext } from '../../context/cartContext';
import './itemDetail.scss';
function ItemDetail({producto}) {
    const [show, setShow] =useState(true)

    const {agregarAlCarrito} = useContext(CartContext)

    const onAdd =(cant)=>{
        setShow (false)
        console.log(cant);
        agregarAlCarrito({...producto, cantidad:cant});
    }
    
    return (
        <div className='itemDetail'>
            <div className='titulo'>
                <h1>{producto.nombre}</h1>
            </div>
            <div className='imagen'>
                <img src={producto.img1} alt={producto.nombre}/>
            </div>
            <div className='aside'>
                <h2>${producto.precio}</h2>
                {show ? 
                        <ItemCount stock={producto.stock} initial={1} cantidad={(cant)=>onAdd(cant)}/>
                    :
                        <div>
                            <Link to='/carrito'>
                                <button>Ir al Carrito</button>
                            </Link>
                            <Link to='/'>
                                <button>Seguir comprando</button>
                            </Link>
                        </div>
                }
            </div>
        </div>
    )
}

export default ItemDetail
