import React from 'react'
import {useState} from 'react'

function ItemCount({stock, initial, onAdd}) {
    const [contador, setContador] = useState(initial);

    return (
        <div>
            <div>{contador}</div>
            <buttom onClick={()=>{
                if(contador > 0){
                    setContador(contador-1)
                    }
                }}>-</buttom>
            <buttom onClick={()=>{
                if(contador < stock){
                    setContador(contador+1)}else{
                        alert(onAdd)
                    }
                    }}>+</buttom>
        </div>
    )
}

export default ItemCount
