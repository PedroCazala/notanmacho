import {React,useEffect,useState} from 'react'
import { getFetch } from '../../helpers/mock'
import ItemList from '../Item/ItemList'
import loadingImg from '../../assets/images/logos/loading_gif.gif'

function ItemListContainer({greeting}) {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
        getFetch
        .then(resp => setProductos(resp))
        .catch(err=>console.log(err))
        .finally(()=>setLoading(false))
    },[])
    console.log(productos)
    return (
        <div>
            <h1>
                {greeting}
            </h1>
            {loading ? <img src={loadingImg} alt="Rueda de cargando" />
            :
            <ItemList productos={productos}/>}
        </div>
    )
}

export default ItemListContainer
