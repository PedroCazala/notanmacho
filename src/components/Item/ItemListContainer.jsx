import {React,useEffect,useState} from 'react'
import { getFetch } from '../../helpers/mock'
import ItemList from './ItemList'
import loadingImg from '../../assets/images/logos/loading_gif.gif'
import { useParams } from 'react-router-dom';

function ItemListContainer({greeting}) {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    // const {categoria} = useParams()
    const {subcategoria} = useParams()

    useEffect(()=>{
        if(subcategoria){
            getFetch
            .then(resp => setProductos(resp.filter(prod=>prod.categoria.replaceAll(' ','-') === subcategoria.toLowerCase())))
            .catch(err=>console.log(err))
            .finally(()=>setLoading(false))
        // } else if(categoria){
        //     getFetch
        //     .then(resp => setProductos(resp.filter(prod=>prod.categoria === categoria.toLowerCase())))
        //     .catch(err=>console.log(err))
        //     .finally(()=>setLoading(false))
        }else{
            getFetch
            .then(resp => setProductos(resp))
            .catch(err=>console.log(err))
            .finally(()=>setLoading(false))
        }
    },[subcategoria])
    
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
