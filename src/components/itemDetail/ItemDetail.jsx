import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../contador/ItemCount'
import './itemDetail.scss';
function ItemDetail({producto}) {
    const [show, setShow] =useState(true)

    const onAdd =()=>{
        setShow (false)
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
                        <ItemCount stock={producto.stock} initial={1} onAdd={onAdd}/>
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
