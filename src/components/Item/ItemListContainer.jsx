import {React,useEffect,useState} from 'react'
// import { getFetch } from '../../helpers/mock'
import ItemList from './ItemList'
import loadingImg from '../../assets/images/logos/loading_gif.gif'
import { useParams } from 'react-router-dom';

import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'

function ItemListContainer({greeting}) {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    
    // const [filtro,setFiltro]=useState()

    // const {categoria} = useParams()
    const {subcategoria} = useParams()

    // const modificaFiltro =()=>{
    //     if(subcategoria){
    //         setFiltro(subcategoria)
    //     }else if(categoria){
    //         setFiltro(categoria)
    //     }else{
    //         setFiltro('undefined')
    //     }
    // }
    useEffect(()=>{

        const db = getFirestore()

        if(subcategoria){
            // modificaFiltro()
            const queryCollection = query( collection(db,'items'),
            where('subcategory','==',subcategoria.toLocaleLowerCase()))
            // (!subcategoria)&& where('category','==',subcategoria.toLocaleLowerCase())
            getDocs(queryCollection)
            .then(res=>setProductos( res.docs.map(prod=> ({id:prod.id, ...prod.data()}) ) ))
            .catch(err=>err)
            .finally(setLoading(false))
        }else{
            // modificaFiltro()
            const queryCollection = query( collection(db,'items'))
            getDocs(queryCollection)
            .then(res=>setProductos( res.docs.map(prod=> ({id:prod.id, ...prod.data()}) ) ))
            .catch(err=>err)
            .finally(setLoading(false))
        }
    },[subcategoria])
    // console.log('filtro',filtro);
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
