import React, { useContext,useState } from 'react'
import { CartContext } from '../../context/cartContext'
import ItemCart from './ItemCart'
import './cart.scss'
import { collection, addDoc, getFirestore} from 'firebase/firestore'
import { Link } from 'react-router-dom'


function Cart() {
    const {cartList, totalCart, vaciarCarrito,sumarTotalCart} = useContext(CartContext)
    // console.log('cartList',cartList)
    let orden = {}
    // const [productosTerminarCompra,setProductosTerminarCompra] = useState([])
    const [pedido,setPedido] = useState({})
    const terminarCompra = async() =>{
        orden.buyer ={
            name:'pedro',
            phone:2323252525,
            email:'cazalapedro@gmail.com'
        }
        orden.total= totalCart;

        orden. items = cartList.map(producto => {
            // setProductosTerminarCompra([...productosTerminarCompra,{
                let id = producto.id
                let name = producto.name
                let price = producto.price
                let cantidad= producto.cantidad
                let totalPrice= producto.price*producto.cantidad
                return{id, name, price, cantidad, totalPrice}
            // }])
        })

        // console.log(productosTerminarCompra)
        // setPedido({buyer, productosTerminarCompra, totalCart})
        console.log(orden)
        const db =getFirestore()
        const ordenCollection= collection(db, 'ordenes')
        await addDoc(ordenCollection, orden)
        .then(resp=>console.log(resp))
        .catch(err=>console.log(err))
        .finally(()=>console.log('cargando'))
        }

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
                            {sumarTotalCart()}
                            <div>{totalCart}</div>
                            <button className='boton1 btnVaciarCarrito' onClick={vaciarCarrito}>Vaciar carrito</button>
                            <button className='boton1 ' onClick={terminarCompra}>Terminar compra</button>
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
