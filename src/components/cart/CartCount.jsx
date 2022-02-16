import React,{useState} from 'react'
import { useCartContext } from '../../context/cartContext';

function ItemCount({producto}) {
    const{modificarEnCarrito} = useCartContext()
    const [contador, setContador] = useState(producto.cantidad);


    const restar = () =>{
        if(contador > 1){
        modificarEnCarrito(contador-1,producto.id)
        setContador(contador-1)
        }
    }

    const sumar = () =>{
        if(contador < producto.stock){
            modificarEnCarrito(contador+1,producto.id)
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
                <button onClick={restar}>-</button>
                <button onClick={sumar}>+</button>
            </div>
        </div>
    )
}

export default ItemCount
