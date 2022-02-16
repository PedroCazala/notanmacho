import React, { useEffect, useState } from 'react'
import loadingImg from '../../assets/images/logos/loading_gif.gif'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore} from 'firebase/firestore'


function ItemDetailContainer() {
    const [producto, setProducto]= useState({})
    const [loading, setLoading] = useState(true)

    const {idDetalle} = useParams()
    
    useEffect(()=>{
        const db = getFirestore()
        const queryProd = doc(db, 'items', idDetalle)
        getDoc(queryProd)
        .then(res=>setProducto({id: res.id, ...res.data()}))
        .catch(err=>console.log(err))
        .finally(setLoading(false))
    },[idDetalle])

    return (
        <div>
            <center>
                {loading ? <img src={loadingImg} alt="Rueda de cargando" />:
                <div key={producto.id}>
                    <h1>{producto.name}</h1>
                    <ItemDetail producto={producto}/>
                </div>}
            </center>
        </div>
    )
}

export default ItemDetailContainer
