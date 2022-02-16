import React, { useState } from 'react'
import { useCartContext } from '../../context/cartContext'
import './cart.scss'
import { collection, addDoc, getFirestore} from 'firebase/firestore'
import { Link } from 'react-router-dom'
import CartList from './CartList'
import CartForm from './CartForm'
import GeneratedOrder from './GeneratedOrder'
import loadingImg from '../../assets/images/logos/loading_gif.gif'


function Cart() {
    const {cartList, totalCart, vaciarCarrito,sumarTotalCart} = useCartContext()
    
    const [dataForm,setDataForm]=useState({
        name:'',
        phone:'',
        email:'',
        emailConfirm:''
    })
    const [showForm, setShowForm] = useState(false)
    const [idOrder,setIdOrder]=useState('')
    const [loading, setLoading] = useState(false)

    let orden = {}

    const continueShopping =()=>{
        setShowForm(!showForm)
    }
    const finishBuying = async() =>{
        orden.buyer = dataForm;
        orden.total= totalCart;

        orden.items = cartList.map(producto => {
            let id = producto.id
            let name = producto.name
            let price = producto.price
            let cantidad= producto.cantidad
            let totalPrice= producto.price*producto.cantidad
            return{id, name, price, cantidad, totalPrice}
        })
        //Guardar la orden en Firestore
        const db =getFirestore()
        const ordenCollection= collection(db, 'ordenes')
        await addDoc(ordenCollection, orden)
        .then(res=>setIdOrder(res.id))
        .then(
            setDataForm({
                name:'',
                phone:'',
                email:'',
                emailConfirm:''
            })
        )
        .catch(err=>console.log(err))
        .finally(
            setShowForm(false),
            vaciarCarrito(),
            setLoading(true)
        )
    }

    const handleChange =(e)=>{
        e.preventDefault()
        setDataForm({
            ...dataForm,
            [e.target.name]:e.target.value
        })
    }

    const validation = (e)=>{
        e.preventDefault()
        if(dataForm.email !== dataForm.emailConfirm){
            alert('El email no councide, por favor ingreselos nuevamente')
            setDataForm({
                ...dataForm,
                emailConfirm:''
            })
        }else{finishBuying()}
    }
    const acceptOrderSummary=()=>{
        setLoading(false)
    }

    return (
        <div>
            {cartList[0] ?
                <>
                    {showForm === false ?
                        <>
                            <CartList/>
                            <div className='pieDeCart'>
                                <div>Precio total: </div>
                                {sumarTotalCart()}
                                <div>{totalCart}</div>
                                <button className='boton1 btnVaciarCarrito' onClick={vaciarCarrito}>Vaciar carrito</button>
                                <button className='boton1' onClick={continueShopping}>Continuar compra</button>
                            </div>
                        </>
                    :   
                        <CartForm dataForm={dataForm}validation={(e)=>validation(e)} handleChange={handleChange}/>
                    }
                </>
            :
                <>
                    {(loading) ?
                        // <GeneratedOrder idOrder={idOrder} key={idOrder} acceptOrderSummary={acceptOrderSummary}/>
                        <>
                            {idOrder ?
                                <GeneratedOrder idOrder={idOrder} key={idOrder} acceptOrderSummary={acceptOrderSummary}/>
                            :   
                            <div><img src={loadingImg} alt="Rueda de cargando" /></div>
                        }
                        </>
                    :
                        <div className='nothingInCart'>
                            <p>No hay porductos en el carrito</p>
                            <p>Ir a la pagina de inicio:</p>
                            <Link to='/' className='logo-notanmacho'>No Tan MACHO</Link>
                        </div>
                    }
                </>
            }
        </div>
    )
}

export default Cart
