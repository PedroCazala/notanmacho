import React, { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import ItemCart from './ItemCart'
import './cart.scss'
import TotalCart from './TotalCart'
import { Link } from 'react-router-dom'


function Cart() {
    const {cartList, vaciarCarrito} = useContext(CartContext)
    console.log('cartList',cartList)

    return (
        <div>
            {cartList[0] ?
                <>
                    {cartList.map(producto=>{
                        return(
                            <ItemCart producto={producto} key={`cart${producto.id}`}/>
                        )
                    })}
                    {cartList[0] &&
                        <div className='pieDeCart'>
                            <div>Precio total: </div>
                            <TotalCart/>
                            <button className='boton1 btnVaciarCarrito' onClick={vaciarCarrito}>Vaciar carrito</button>
                        </div>
                    }
                </>
            :
            <div className='noHayProductosEnElCarrito'>
                <p>No hay porductos en el carrito</p>
                <p>Ir a la pagina de inicio:</p>
                <Link to='/' className='logo-notanmacho'>No Tan MACHO</Link>
            </div>
            }
        </div>
    )
}

export default Cart
