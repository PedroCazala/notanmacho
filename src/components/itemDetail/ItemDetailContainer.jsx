import React, { useEffect, useState } from 'react'
import { getFetch } from '../../helpers/mock'
import loadingImg from '../../assets/images/logos/loading_gif.gif'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
    const [producto, setProducto]= useState()
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        getFetch
        .then(res=>{setProducto(res.find(producto =>producto.id === '1'))})
        .catch(err=>{console.log(err)})
        .finally(()=>{setLoading(false)})
    },[])

    
    console.log('productos del contenedor del detail:')
    console.log(producto)
    //FUNCIONA:
    // const roma = producto.find(producto =>producto.id === '1')
    // console.log(roma)

    return (
        <div>
            <center>
                {loading ? <img src={loadingImg} alt="Rueda de cargando" />:
                <div>
                    <ItemDetail key={producto.id}  producto={producto}/>
                </div>}
            </center>
        </div>
    )
}

export default ItemDetailContainer
