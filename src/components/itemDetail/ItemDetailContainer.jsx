import React, { useEffect, useState } from 'react'
import { getFetch } from '../../helpers/mock'
import loadingImg from '../../assets/images/logos/loading_gif.gif'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

function ItemDetailContainer() {
    const [producto, setProducto]= useState()
    const [loading, setLoading] = useState(true)

    const {idDetalle} = useParams()

    useEffect(()=>{
        if(idDetalle){
            getFetch
            .then(res=>{setProducto(res.find(producto =>producto.id + producto.nombre === idDetalle))})
            .catch(err=>{console.log(err)})
            .finally(()=>{setLoading(false)})
        }else{
            getFetch
            .then(res=>{setProducto(res.find(producto =>producto.id === '1'))})
            .catch(err=>{console.log(err)})
            .finally(()=>{setLoading(false)})
        }
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
