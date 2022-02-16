import React, { useEffect, useState } from 'react'
import {doc, getDoc, getFirestore} from 'firebase/firestore'
import loadingImg from '../../assets/images/logos/loading_gif.gif'
function OrderGenerated({idOrder}) {
    const [order, setOrder] = useState({})
    const [prosesingOrder, setProsesingOrder] = useState(true)
    useEffect(()=>{
        const db = getFirestore()
        const queryOrder = doc(db, 'ordenes', idOrder)
        getDoc(queryOrder)
        .then(res=>setOrder({id:res.id, ...res.data()}))
        .catch(err=>console.log(err))
        // .finally(setProsesingOrder(false))
    },[idOrder])

    const aceptar=()=>{
        setProsesingOrder(!prosesingOrder)
    }
    return (
        <div>
            {(prosesingOrder === true) ?
                <div><img src={loadingImg} alt="Rueda de cargando" />
                    <button onClick={aceptar}>Aceptar</button>
                </div>
            :
                <div >
                    <div>Pedido realizado con exito</div>
                    <div>Su numero de orden es:</div>
                    <div>{order.total}</div>
                    <div>email: {order.buyer.email}</div>
                    <button onClick={aceptar}>Aceptar</button>
                    <div>{order.total}</div>
                    <div>{order.buyer.email}</div>
                    <div>{order.buyer.name}</div>
                    {/* <table>
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {order.items.map(product=>{
                                <tr key={product.id}>
                                    <th>{product.name}</th>
                                    <th>{product.cantidad}</th>
                                    <th>{product.price}</th>
                                    <th>{product.cantidad * product.price}</th>
                                </tr>
                            }
                            )}
                            <tr>
                                <th>lala</th>
                                <th>lala</th>
                                <th>lala</th>
                                <th>lala</th>
                            </tr>
                        </tbody>
                    </table> */}
                </div>
                }
        </div>
    )
}

export default OrderGenerated