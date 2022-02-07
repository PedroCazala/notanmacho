import React, { useContext,useState } from 'react'
import { CartContext } from '../../context/cartContext'
import ItemCart from './ItemCart'
import './cart.scss'
import { collection, addDoc, getFirestore} from 'firebase/firestore'
import { Link } from 'react-router-dom'


function Cart() {
    const [dataForm,setDataForm]=useState({
        name:'',
        phone:'',
        email:''
    })
    const {cartList, totalCart, vaciarCarrito,sumarTotalCart} = useContext(CartContext)
    // console.log('cartList',cartList)
    let orden = {}
    // const [productosTerminarCompra,setProductosTerminarCompra] = useState([])
    // const [pedido,setPedido] = useState({})
    const terminarCompra = async() =>{
        orden.buyer = dataForm;
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
        .finally(setDataForm({
            name:'',
            phone:'',
            email:'',
            emailConfirm:''
        }))
        }

    const handleChange =(e)=>{
        // console.log('cambio', e.target.name);
        // console.log('cambio', e.target.value);
        setDataForm({
            ...dataForm,
            [e.target.name]:e.target.value
        })
    }
    const validacion = (e)=>{
        e.preventDefault()
        if(dataForm.email !== dataForm.emailConfirm){
            alert('El email no councide, por favor ingreselos nuevamente')
            setDataForm({
                ...dataForm,
                emailConfirm:''
            })
        }else{terminarCompra()}
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
                            <form
                                onSubmit={validacion}
                            >
                                
                                <input 
                                    required
                                    type="text"
                                    name='name'
                                    placeholder='Nombre*'
                                    onChange={handleChange}
                                    value={dataForm.name}
                                /><br/>
                                <input 
                                    required
                                    type="email"
                                    name='email'
                                    placeholder='e-mail *'
                                    onChange={handleChange}
                                    value={dataForm.email}
                                /><br/>
                                <input 
                                    required
                                    type="email"
                                    name='emailConfirm'
                                    placeholder='Confirme su e-mail*'
                                    value={dataForm.emailConfirm}
                                    onChange={handleChange}
                                    //value=
                                /><br/> 
                                <input 
                                    required
                                    type="phone"
                                    name='phone'
                                    placeholder='Telefono*'
                                    onChange={handleChange}
                                    value={dataForm.phone}
                                /><br/>

                                <button className='boton1 ' /*onClick={terminarCompra}*/>Terminar compra</button>
                            </form>
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
