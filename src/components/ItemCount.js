import React from 'react'
import {useState} from 'react'

function ItemCount({stock, initial, onAdd}) {
    const [contador, setContador] = useState(initial);

    const restar = () =>{
        contador > initial && setContador(contador-1)
    }

    const sumar = () =>{
        contador < stock ? setContador(contador+1) : alert(onAdd)
    }

    return (
        <div>
            <div>{contador}</div>
            <buttom onClick={restar}>-</buttom>
            <buttom onClick={sumar}>+</buttom>
        </div>
    )
}

export default ItemCount
