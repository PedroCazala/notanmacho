import React,{useState} from 'react'
import { useCartContext } from '../../context/cartContext';

function ItemCount({product}) {
    const{modificarEnCarrito} = useCartContext()
    const [contador, setContador] = useState(product.quantity);


    const less = () =>{
        if(contador > 1){
        modificarEnCarrito(contador-1,product.id)
        setContador(contador-1)
        }
    }

    const add = () =>{
        if(contador < product.stock){
            modificarEnCarrito(contador+1,product.id)
            setContador(contador+1)
        }else{
            alert('No hay suficientes productos en stock')
        }
    }

    return (
        <div className='itemCount'>
            {/* <input value={contador} type='number'></input> */}
            <div>{contador}</div>
            <div className='sumarRestar'>
                <button onClick={less}>-</button>
                <button onClick={add}>+</button>
            </div>
        </div>
    )
}

export default ItemCount
