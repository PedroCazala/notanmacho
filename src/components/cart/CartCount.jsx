import React from 'react'
import {useState} from 'react'
import { useCartContext } from '../../context/cartContext';
// import './itemCount.scss'

function ItemCount({producto}) {
    const{modificarEnCarrito} = useCartContext()
    const [contador, setContador] = useState(producto.cantidad);


    const restar = () =>{
        contador > 1 && 
        setContador(contador-1)
        modificarEnCarrito(contador,producto.id)
    }

    const sumar = () =>{
        if(contador < producto.stock){
            setContador(contador+1)
            modificarEnCarrito(contador,producto.id)
        }else{
            alert('No hay suficientes productos en stock')
        }
    }

    return (
        <div className='itemCount'>
            {/* <input value={contador} type='number'></input> */}
            <div>{contador}</div>
            <div className='sumarRestar'>
                <button onClick={restar}>-</button>
                <button onClick={sumar}>+</button>
            </div>
        </div>
    )
}

export default ItemCount
