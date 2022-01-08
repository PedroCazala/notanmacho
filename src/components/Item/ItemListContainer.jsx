import {React,useEffect,useState} from 'react'
import { getFetch } from '../../helpers/mock'
import ItemList from './ItemList'
import loadingImg from '../../assets/images/logos/loading_gif.gif'

function ItemListContainer({greeting}) {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        getFetch
        .then(resp => setProductos(resp))
        .catch(err=>console.log(err))
        .finally(()=>setLoading(false))
    },[])
    return (
        <div>
            <center><h1>
                {greeting}
            </h1></center>
            {loading ? <img src={loadingImg} alt="Rueda de cargando" />
            :
            <ItemList productos={productos}/>}
        </div>
    )
}

export default ItemListContainer
