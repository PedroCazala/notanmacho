import React, { useEffect, useState } from 'react'
import {doc, getDoc, getFirestore} from 'firebase/firestore'

function OrderGenerated({idOrder,acceptOrderSummary}) {
    const [order, setOrder] = useState({})
    const [show,setShow] =useState(false)

    useEffect(()=>{
        const db = getFirestore()
        const queryOrder = doc(db, 'ordenes', idOrder)
        getDoc(queryOrder)
        .then(res=>setOrder({id:res.id, ...res.data()}))
        .catch(err=>console.log(err))
        .finally(setShow(true))
    },[idOrder])

    return (
        <div>
            {show &&
                (<div className='generatedOrder'>
                    <h1>Pedido realizado con exito</h1>
                    <div>Orden n° {order.id}</div>
                    <div>Usuario: {order?.buyer?.name}</div>
                    <div>e-mail: {order?.buyer?.email}</div>
                    <div>Teléfono: {order?.buyer?.phone}</div>
                    <table>
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {order?.items?.map(product=>{
                                return (<tr key={product.id}>
                                    <td>{product.name}</td>
                                    <td>{product.cantidad}</td>
                                    <td>${product.price}</td>
                                    <td>${product.cantidad * product.price}</td>
                                </tr>)
                            })}
                        </tbody>
                    </table>
                    <div>Monto total: ${order.total}</div>
                    <button onClick={acceptOrderSummary} className='boton1'>Aceptar</button>
                </div>)
            }
        </div>
    )
}

export default OrderGenerated