import React from 'react'
import {useState} from 'react'
import './itemCount.scss'

function ItemCount({stock, initial, quantityInDetail}) {
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
            {quantityInDetail &&
                <>
                    <p>(Disponibles {stock})</p>
                    {stock >= 1 && <button className='boton2' onClick={()=>quantityInDetail(contador)}>Agregar al carrito</button>}
                </>
            }
        </div>
    )
}

export default ItemCount
