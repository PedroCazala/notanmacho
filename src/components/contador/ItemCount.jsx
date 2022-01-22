import React from 'react'
import {useState} from 'react'
import './itemCount.scss'

function ItemCount({stock, initial, cantidadEnDetail}) {
    const [contador, setContador] = useState(initial);
    
    const restar = () =>{
        contador > initial && setContador(contador-1)
    }

    const sumar = () =>{
        contador < stock ? setContador(contador+1) : alert('No hay suficientes productos en stock')
    }

    return (
        <div className='itemCount'>
            <div >{contador}</div>
            <div className='sumarRestar'>
                <button onClick={restar}>-</button>
                <button onClick={sumar}>+</button>
            </div>
            {cantidadEnDetail &&
                <>
                    <p>(Disponibles {stock})</p>
                    <button className='boton2' onClick={()=>cantidadEnDetail(contador)}>Agregar al carrito</button>
                </>
            }
        </div>
    )
}

export default ItemCount
