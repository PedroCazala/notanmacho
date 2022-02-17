import {React,useEffect,useState} from 'react'
import ItemList from './ItemList'
import loadingImg from '../../assets/images/logos/loading_gif.gif'
import { useParams } from 'react-router-dom';

import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'

function ItemListContainer({greeting}) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const {categoria} = useParams()
    const {subcategoria} = useParams()
    const filtro = subcategoria ? subcategoria: categoria;

    useEffect(()=>{
        const db = getFirestore()
        if(subcategoria){
            const queryCollection = query( collection(db,'items'),
            where('subcategory','==',subcategoria.toLocaleLowerCase()))
            getDocs(queryCollection)
            .then(res=>setProducts( res.docs.map(prod=> ({id:prod.id, ...prod.data()}) ) ))
            .catch(err=>err)
            .finally(setLoading(false))
        }
        else if(categoria){
            const queryCollection = query( collection(db,'items'),
            where('category','==',categoria.toLocaleLowerCase()))
            getDocs(queryCollection)
            .then(res=>setProducts( res.docs.map(prod=> ({id:prod.id, ...prod.data()}) ) ))
            .catch(err=>err)
            .finally(setLoading(false))
        }
        else{
            const queryCollection = query( collection(db,'items'))
            getDocs(queryCollection)
            .then(res=>setProducts( res.docs.map(prod=> ({id:prod.id, ...prod.data()}) ) ))
            .catch(err=>err)
            .finally(setLoading(false))
        }
    },[filtro])

    return (
        <div>
            <center><h1>
                {subcategoria? subcategoria.replaceAll('-',' '):
                <>{
                    categoria ? categoria.replaceAll('-',' '):'No Tan MACHO'
                }</>
                }
            </h1></center>
            {loading ? <img src={loadingImg} alt="Rueda de cargando" />
            :
            <ItemList products={products}/>}
        </div>
    )
}

export default ItemListContainer
